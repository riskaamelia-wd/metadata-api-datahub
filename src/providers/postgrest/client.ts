import { env } from '@/config/env';
import type {
  DataProvider,
  DataQueryOptions,
} from '@/interfaces/data-provider';

function buildHeaders(schema: string): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Accept-Profile': schema,
    'Content-Profile': schema,
  };

  if (env.postgrest.accessToken) {
    headers.Authorization = `Bearer ${env.postgrest.accessToken}`;
  }

  return headers;
}

export async function query<T = unknown>(
  options: DataQueryOptions,
): Promise<T> {
  const baseUrl = env.postgrest.url.replace(/\/$/, '');
  const url = new URL(`${baseUrl}/${options.table}`);

  if (options.searchParams) {
    url.search = options.searchParams.toString();
  }

  const response = await fetch(url.toString(), {
    headers: buildHeaders(options.schema),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `PostgREST request failed with status ${response.status}: ${body}`,
    );
  }

  return (await response.json()) as T;
}

export const postgrestClient: DataProvider = {
  query,
};
