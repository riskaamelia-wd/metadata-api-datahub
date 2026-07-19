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

export interface DatasetByDomainEntity {
  urn: string;
  name: string;
  properties: {
    description: string | null;
  } | null;
}

export interface DatasetByDomainResult {
  search: {
    total: number;
    searchResults: Array<{
      entity: DatasetByDomainEntity;
    }>;
  };
}
