export const SEARCH_DOMAINS_QUERY = `
  query SearchDomains($input: SearchInput!) {
    search(input: $input) {
      total
      searchResults {
        entity {
          urn
        }
      }
    }
  }
`;

export const GET_DOMAIN_BY_URN_QUERY = `
  query GetDomainByUrn($urn: String!) {
    domain(urn: $urn) {
      urn
    }
  }
`;
