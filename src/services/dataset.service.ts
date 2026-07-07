import {
  GET_DATASET_BY_URN_QUERY,
  SEARCH_DATASETS_QUERY,
} from '@/graphql/queries/dataset.query';
import type { DataHubEntity, DataHubSearchResult } from '@/graphql/types/datahub.types';
import type { MetadataProvider } from '@/interfaces/metadata-provider';
import { datahubClient } from '@/providers/datahub';
import type { PaginationParams } from '@/types/api';
import { buildSearchInput } from '@/utils/search-input';

export class DatasetService {
  constructor(private readonly provider: MetadataProvider = datahubClient) {}

  async search(query?: string, pagination: PaginationParams = {}) {
    const input = buildSearchInput({
      entityType: 'DATASET',
      query,
      ...pagination,
    });

    const result = await this.provider.execute<DataHubSearchResult<DataHubEntity>>({
      query: SEARCH_DATASETS_QUERY,
      variables: { input },
    });

    return result.search;
  }

  async getByUrn(urn: string) {
    const result = await this.provider.execute<{ dataset: DataHubEntity | null }>({
      query: GET_DATASET_BY_URN_QUERY,
      variables: { urn },
    });

    if (!result.dataset) {
      throw new Error(`Dataset not found: ${urn}`);
    }

    return result.dataset;
  }
}

export const datasetService = new DatasetService();
