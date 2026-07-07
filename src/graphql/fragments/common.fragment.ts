export const ENTITY_PROPERTIES_FRAGMENT = `
  fragment EntityProperties on Entity {
    urn
    type
    properties {
      name
      description
    }
  }
`;
