import {
  GET_DOMAIN_BY_URN_QUERY,
  SEARCH_DOMAINS_QUERY,
} from '@/graphql/queries/domain.query';
import type {
  DomainSearchEntity,
  DomainSearchResult,
} from '@/graphql/types/domain.types';
import type { MetadataProvider } from '@/interfaces/metadata-provider';
import { datahubClient } from '@/providers/datahub';
import type { PaginationParams } from '@/types/api';
import { buildSearchInput } from '@/utils/search-input';

export class DomainService {
  constructor(private readonly provider: MetadataProvider = datahubClient) {}

  async search(query?: string, pagination: PaginationParams = {}) {
    const input = buildSearchInput({
      entityType: 'DOMAIN',
      query: query ?? '*',
      start: pagination.start ?? 0,
      count: pagination.count ?? 100,
    });

    const result = await this.provider.execute<DomainSearchResult>({
      query: SEARCH_DOMAINS_QUERY,
      variables: { input },
    });

    return result.search;
  }

  async getByUrn(urn: string) {
    const result = await this.provider.execute<{
      domain: DomainSearchEntity | null;
    }>({
      query: GET_DOMAIN_BY_URN_QUERY,
      variables: { urn },
    });

    if (!result.domain) {
      throw new Error(`Domain not found: ${urn}`);
    }

    return result.domain;
  }
}

export const domainService = new DomainService();
