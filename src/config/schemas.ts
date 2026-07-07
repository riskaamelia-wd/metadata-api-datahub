export const ALLOWED_DATA_SCHEMAS = [
  'kependudukan',
  'partai',
  'pemilu',
  'wilayah',
] as const;

export type DataSchema = (typeof ALLOWED_DATA_SCHEMAS)[number];

export function isAllowedDataSchema(schema: string): schema is DataSchema {
  return (ALLOWED_DATA_SCHEMAS as readonly string[]).includes(schema);
}
