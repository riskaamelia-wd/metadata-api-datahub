export interface DomainSearchEntity {
  urn: string;
}

export interface DomainSearchResult {
  search: {
    total: number;
    searchResults: Array<{
      entity: DomainSearchEntity;
    }>;
  };
}
