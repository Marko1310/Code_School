import { z } from 'zod';

const EnvSchema = z.object({
  VITE_SUPABASE_URL: z.string(),
  VITE_ANON_KEY: z.string(),
});

export function validateEnvVariables(env: NodeJS.ProcessEnv) {
  const envVariables = EnvSchema.parse(env);

  return {
    supabaseUrl: envVariables.VITE_SUPABASE_URL,
    supabaseKey: envVariables.VITE_ANON_KEY,
  };
}
