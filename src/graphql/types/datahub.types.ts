export interface DataHubEntity {
  urn: string;
  type: string;
  properties?: {
    name?: string;
    description?: string;
  };
}

export interface DataHubSearchResult<T = DataHubEntity> {
  search: {
    total: number;
    count: number;
    start: number;
    searchResults: Array<{
      entity: T;
    }>;
  };
}

export interface DataHubLineageResult {
  entity: {
    urn: string;
    type: string;
    upstream?: {
      upstreams: Array<{
        dataset: DataHubEntity;
      }>;
    };
    downstream?: {
      downstreams: Array<{
        dataset: DataHubEntity;
      }>;
    };
  };
}
