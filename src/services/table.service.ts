import {
  ALLOWED_DATA_SCHEMAS,
  isAllowedDataSchema,
} from '@/config/schemas';
import type { PostgresProvider } from '@/interfaces/postgres-provider';
import { postgresClient } from '@/providers/postgres';
import type { TableListResult } from '@/types/table.types';

export class TableService {
  constructor(private readonly provider: PostgresProvider = postgresClient) {}

  async list(schema?: string): Promise<TableListResult> {
    const schemas = schema
      ? this.resolveSchema(schema)
      : [...ALLOWED_DATA_SCHEMAS];

    const tables = await this.provider.listTables(schemas);

    return {
      tables,
      total: tables.length,
    };
  }

  private resolveSchema(schema: string): string[] {
    if (!isAllowedDataSchema(schema)) {
      throw new Error(
        `Schema "${schema}" is not allowed. Allowed schemas: kependudukan, partai, pemilu, wilayah`,
      );
    }

    return [schema];
  }
}

export const tableService = new TableService();
