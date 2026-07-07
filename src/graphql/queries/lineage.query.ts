export const GET_LINEAGE_QUERY = `
  query GetLineage($urn: String!) {
    entity(urn: $urn) {
      urn
      type
      ... on Dataset {
        upstream: upstreamLineage(input: { start: 0, count: 100 }) {
          upstreams {
            dataset {
              urn
              type
              properties {
                name
              }
            }
          }
        }
        downstream: downstreamLineage(input: { start: 0, count: 100 }) {
          downstreams {
            dataset {
              urn
              type
              properties {
                name
              }
            }
          }
        }
      }
    }
  }
`;
