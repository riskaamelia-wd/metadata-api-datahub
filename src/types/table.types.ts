export interface TableInfo {
  schema: string;
  name: string;
  type: string;
}

export interface TableListResult {
  tables: TableInfo[];
  total: number;
}
