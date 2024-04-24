import { createClient } from '@supabase/supabase-js';
import { validateEnvVariables } from './envValidation';

const { supabaseUrl, supabaseKey } = validateEnvVariables(import.meta.env);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
