import type { NextRequest } from 'next/server';
import { errorResponse } from '@/utils/response';

type RouteContext = {
  params: Promise<Record<string, string>>;
};

type RouteHandler = (
  request: NextRequest,
  context: RouteContext,
) => Promise<Response>;

export function asyncHandler(handler: RouteHandler): RouteHandler {
  return async (request, context) => {
    try {
      return await handler(request, context);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Internal server error';
      return errorResponse(message);
    }
  };
}
