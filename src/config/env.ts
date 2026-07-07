const requiredEnv = ['DATAHUB_GMS_URL'] as const;

function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function validateEnv(): void {
  for (const key of requiredEnv) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  datahub: {
    gmsUrl: getEnv('DATAHUB_GMS_URL', 'http://localhost:8080/api/graphql'),
    accessToken: process.env.DATAHUB_ACCESS_TOKEN ?? '',
  },
} as const;

export { validateEnv };
