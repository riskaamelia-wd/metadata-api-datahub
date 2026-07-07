import type { NextRequest } from 'next/server';
import { dataService } from '@/services/data.service';
import { successResponse } from '@/utils/response';

export async function getTableData(
  request: NextRequest,
  schema: string,
  table: string,
) {
  const data = await dataService.getTableRows(
    schema,
    table,
    request.nextUrl.searchParams,
  );

  return successResponse(data, `${schema}.${table} retrieved successfully`);
}
