import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pcdxzfxmisfzubbagsup.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
