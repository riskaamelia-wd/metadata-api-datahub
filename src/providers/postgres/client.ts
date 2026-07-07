import { Pool } from 'pg';
import { env } from '@/config/env';
import type { PostgresProvider } from '@/interfaces/postgres-provider';
import type { TableInfo } from '@/types/table.types';

let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: env.postgres.url });
  }
  return pool;
}

export async function listTables(schemas: string[]): Promise<TableInfo[]> {
  const result = await getPool().query<TableInfo>(
    `SELECT table_schema AS schema,
            table_name AS name,
            table_type AS type
     FROM information_schema.tables
     WHERE table_schema = ANY($1::text[])
       AND table_type IN ('BASE TABLE', 'VIEW')
     ORDER BY table_schema, table_name`,
    [schemas],
  );

  return result.rows;
}

export const postgresClient: PostgresProvider = {
  listTables,
};
