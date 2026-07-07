import {
  GET_GLOSSARY_TERM_BY_URN_QUERY,
  SEARCH_GLOSSARY_TERMS_QUERY,
} from '@/graphql/queries/glossary.query';
import type { DataHubEntity, DataHubSearchResult } from '@/graphql/types/datahub.types';
import type { MetadataProvider } from '@/interfaces/metadata-provider';
import { datahubClient } from '@/providers/datahub';
import type { PaginationParams } from '@/types/api';
import { buildSearchInput } from '@/utils/search-input';

export class GlossaryService {
  constructor(private readonly provider: MetadataProvider = datahubClient) {}

  async search(query?: string, pagination: PaginationParams = {}) {
    const input = buildSearchInput({
      entityType: 'GLOSSARY_TERM',
      query,
      ...pagination,
    });

    const result = await this.provider.execute<DataHubSearchResult<DataHubEntity>>({
      query: SEARCH_GLOSSARY_TERMS_QUERY,
      variables: { input },
    });

    return result.search;
  }

  async getByUrn(urn: string) {
    const result = await this.provider.execute<{ glossaryTerm: DataHubEntity | null }>({
      query: GET_GLOSSARY_TERM_BY_URN_QUERY,
      variables: { urn },
    });

    if (!result.glossaryTerm) {
      throw new Error(`Glossary term not found: ${urn}`);
    }

    return result.glossaryTerm;
  }
}

export const glossaryService = new GlossaryService();
