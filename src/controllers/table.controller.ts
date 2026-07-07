import type { NextRequest } from 'next/server';
import { tableService } from '@/services/table.service';
import { successResponse } from '@/utils/response';

export async function listTables(request: NextRequest) {
  const schema = request.nextUrl.searchParams.get('schema') ?? undefined;
  const data = await tableService.list(schema);

  return successResponse(data, 'Tables retrieved successfully');
}
