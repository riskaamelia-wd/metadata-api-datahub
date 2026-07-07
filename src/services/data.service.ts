import { isAllowedDataSchema } from '@/config/schemas';
import type { DataProvider } from '@/interfaces/data-provider';
import { postgrestClient } from '@/providers/postgrest';

export class DataService {
  constructor(private readonly provider: DataProvider = postgrestClient) {}

  async getTableRows(
    schema: string,
    table: string,
    searchParams?: URLSearchParams,
  ) {
    if (!isAllowedDataSchema(schema)) {
      throw new Error(
        `Schema "${schema}" is not allowed. Allowed schemas: kependudukan, partai, pemilu, wilayah`,
      );
    }

    if (!table || !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(table)) {
      throw new Error('Invalid table name');
    }

    return this.provider.query<unknown[]>({
      schema,
      table,
      searchParams,
    });
  }
}

export const dataService = new DataService();
