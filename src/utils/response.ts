import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/types/api';

export function successResponse<T>(
  data: T,
  message = 'OK',
  status = 200,
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status },
  );
}

export function errorResponse(
  message: string,
  status = 500,
  data: unknown = null,
): NextResponse<ApiResponse<unknown>> {
  return NextResponse.json(
    {
      success: false,
      message,
      data,
    },
    { status },
  );
}
