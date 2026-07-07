export const SEARCH_DATASETS_QUERY = `
  query SearchDatasets($input: SearchInput!) {
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

export const GET_DATASET_BY_URN_QUERY = `
  query GetDatasetByUrn($urn: String!) {
    dataset(urn: $urn) {
      urn
    }
  }
`;
