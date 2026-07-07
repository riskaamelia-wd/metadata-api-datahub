import { ENTITY_PROPERTIES_FRAGMENT } from '@/graphql/fragments/common.fragment';

export const SEARCH_DOMAINS_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query SearchDomains($input: SearchInput!) {
    search(input: $input) {
      total
      count
      start
      searchResults {
        entity {
          ... on Domain {
            ...EntityProperties
          }
        }
      }
    }
  }
`;

export const GET_DOMAIN_BY_URN_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query GetDomainByUrn($urn: String!) {
    domain(urn: $urn) {
      ...EntityProperties
    }
  }
`;
