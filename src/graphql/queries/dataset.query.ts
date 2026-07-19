export const SEARCH_DATASETS_QUERY = `
  query searchDatasets {
    search(input: {
      type: DATASET,
      query: "*",
      start: 0,
      count: 20
    }) {
      total
      searchResults {
        entity {
          urn
          ... on Dataset {
            name
            properties {
              name
              description
            }
            platform {
              name
              properties {
                displayName
              }
            }
            domain {
              domain {
                properties {
                  name
                }
              }
            }
            tags {
              tags {
                tag {
                  name
                }
              }
            }
            editableProperties {
              description
            }
          }
        }
      }
    }
  }
`;

export const DATASETS_BY_DOMAIN_QUERY = `
  query DatasetsByDomain($input: SearchInput!) {
    search(input: $input) {
      total
      searchResults {
        entity {
          urn
          ... on Dataset {
            name
            properties {
              description
            }
          }
        }
      }
    }
  }
`;

export const GET_DATASET_BY_URN_QUERY = `
  query getDatasetDetail($urn: String!) {
    dataset(urn: $urn) {
      urn
      name
      properties {
        name
        description
        customProperties {
          key
          value
        }
      }
      platform {
        name
        properties {
          displayName
          logoUrl
        }
      }
      domain {
        domain {
          urn
          properties {
            name
            description
          }
        }
      }
      tags {
        tags {
          tag {
            name
            properties {
              colorHex
            }
          }
        }
      }
      ownership {
        owners {
          owner {
            ... on CorpUser {
              username
              properties {
                displayName
              }
            }
          }
          type
        }
      }
      schemaMetadata {
        fields {
          fieldPath
          description
          type
          nativeDataType
          nullable
        }
      }
      editableSchemaMetadata {
        editableSchemaFieldInfo {
          fieldPath
          description
        }
      }
      datasetProfiles(limit: 1) {
        rowCount
        columnCount
        timestampMillis
        fieldProfiles {
          fieldPath
          sampleValues
          nullCount
          uniqueCount
          min
          max
        }
      }
      lineage: lineage(input: {
        direction: UPSTREAM,
        start: 0,
        count: 10
      }) {
        total
        relationships {
          entity {
            urn
            type
          }
        }
      }
      subTypes {
        typeNames
      }
      created: properties {
        created
        lastModified {
          time
        }
      }
    }
  }
`;
