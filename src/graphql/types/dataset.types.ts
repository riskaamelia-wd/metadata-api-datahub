export interface DatasetSearchEntity {
  urn: string;
}

export interface DatasetSearchResult {
  search: {
    total: number;
    searchResults: Array<{
      entity: DatasetSearchEntity;
    }>;
  };
}
