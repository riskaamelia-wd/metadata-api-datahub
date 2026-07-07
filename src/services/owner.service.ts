import {
  GET_OWNER_BY_URN_QUERY,
  SEARCH_OWNERS_QUERY,
} from '@/graphql/queries/owner.query';
import type { DataHubSearchResult } from '@/graphql/types/datahub.types';
import type { MetadataProvider } from '@/interfaces/metadata-provider';
import { datahubClient } from '@/providers/datahub';
import type { PaginationParams } from '@/types/api';
import { buildSearchInput } from '@/utils/search-input';

interface OwnerEntity {
  urn: string;
  type: string;
  properties?: {
    displayName?: string;
    email?: string;
  };
}

export class OwnerService {
  constructor(private readonly provider: MetadataProvider = datahubClient) {}

  async search(query?: string, pagination: PaginationParams = {}) {
    const input = buildSearchInput({
      entityType: 'CORP_USER',
      query,
      ...pagination,
    });

    const result = await this.provider.execute<DataHubSearchResult<OwnerEntity>>({
      query: SEARCH_OWNERS_QUERY,
      variables: { input },
    });

    return result.search;
  }

  async getByUrn(urn: string) {
    const result = await this.provider.execute<{ corpUser: OwnerEntity | null }>({
      query: GET_OWNER_BY_URN_QUERY,
      variables: { urn },
    });

    if (!result.corpUser) {
      throw new Error(`Owner not found: ${urn}`);
    }

    return result.corpUser;
  }
}

export const ownerService = new OwnerService();
