import { ENTITY_PROPERTIES_FRAGMENT } from '@/graphql/fragments/common.fragment';

export const SEARCH_GLOSSARY_TERMS_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query SearchGlossaryTerms($input: SearchInput!) {
    search(input: $input) {
      total
      count
      start
      searchResults {
        entity {
          ... on GlossaryTerm {
            ...EntityProperties
          }
        }
      }
    }
  }
`;

export const GET_GLOSSARY_TERM_BY_URN_QUERY = `
  ${ENTITY_PROPERTIES_FRAGMENT}

  query GetGlossaryTermByUrn($urn: String!) {
    glossaryTerm(urn: $urn) {
      ...EntityProperties
    }
  }
`;
