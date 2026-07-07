import type { TableInfo } from '@/types/table.types';

export interface PostgresProvider {
  listTables(schemas: string[]): Promise<TableInfo[]>;
}
