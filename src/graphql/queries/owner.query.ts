import { ENTITY_PROPERTIES_FRAGMENT } from '@/graphql/fragments/common.fragment';

export const SEARCH_OWNERS_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query SearchOwners($input: SearchInput!) {
    search(input: $input) {
      total
      count
      start
      searchResults {
        entity {
          ... on CorpUser {
            urn
            type
            properties {
              displayName
              email
            }
          }
        }
      }
    }
  }
`;

export const GET_OWNER_BY_URN_QUERY = `
  query GetOwnerByUrn($urn: String!) {
    corpUser(urn: $urn) {
      urn
      type
      properties {
        displayName
        email
      }
    }
  }
`;
