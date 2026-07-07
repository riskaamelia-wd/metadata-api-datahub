import { successResponse } from '@/utils/response';

export async function healthCheck() {
  return successResponse(
    {
      status: 'ok',
      service: 'metadata-api',
    },
    'Service is healthy',
  );
}
