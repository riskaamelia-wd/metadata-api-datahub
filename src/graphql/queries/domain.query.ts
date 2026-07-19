export const SEARCH_DOMAINS_QUERY = `
  query SearchDomains($input: ListDomainsInput!) {
    listDomains(input: $input) {
      total
      domains {
        urn
        properties {
          name
          description
        }
        entities {
          total
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
