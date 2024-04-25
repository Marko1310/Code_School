import { createClient } from '@supabase/supabase-js';
import { validateEnvVariables } from './envValidation';
import { Database } from '../types/database.types';

const { supabaseUrl, supabaseKey } = validateEnvVariables(import.meta.env);

const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export default supabaseClient;
