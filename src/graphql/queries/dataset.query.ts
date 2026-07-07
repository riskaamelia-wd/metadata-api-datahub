import { ENTITY_PROPERTIES_FRAGMENT } from '@/graphql/fragments/common.fragment';

export const SEARCH_DATASETS_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query SearchDatasets($input: SearchInput!) {
    search(input: $input) {
      total
      count
      start
      searchResults {
        entity {
          ... on Dataset {
            ...EntityProperties
            platform {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_DATASET_BY_URN_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query GetDatasetByUrn($urn: String!) {
    dataset(urn: $urn) {
      ...EntityProperties
      platform {
        name
      }
    }
  }
`;
