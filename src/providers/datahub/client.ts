import { env } from '@/config/env';
import type {
  GraphQLExecuteOptions,
  MetadataProvider,
} from '@/interfaces/metadata-provider';

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export async function execute<T = unknown>(
  options: GraphQLExecuteOptions,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (env.datahub.accessToken) {
    headers.Authorization = `Bearer ${env.datahub.accessToken}`;
  }

  const response = await fetch(env.datahub.gmsUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: options.query,
      variables: options.variables ?? {},
    }),
  });

  if (!response.ok) {
    throw new Error(
      `DataHub request failed with status ${response.status}`,
    );
  }

  const result = (await response.json()) as GraphQLResponse<T>;

  if (result.errors?.length) {
    throw new Error(result.errors.map((error) => error.message).join(', '));
  }

  if (!result.data) {
    throw new Error('DataHub response does not contain data');
  }

  return result.data;
}

export const datahubClient: MetadataProvider = {
  execute,
};
