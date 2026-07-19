export interface DomainSearchEntity {
  urn: string;
  properties: {
    name: string;
    description: string | null;
  } | null;
  entities: {
    total: number;
  };
}

export interface DomainSearchResult {
  listDomains: {
    total: number;
    domains: DomainSearchEntity[];
  };
}
