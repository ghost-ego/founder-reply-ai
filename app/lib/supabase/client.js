import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://lfrfcqfkaiiqpykaluqw.supabase.co";

const supabasePublishableKey =
  "sb_publishable_g5_j08qHLnyaEto_DBSKtA_GUjMN33W";

export function createClient() {
  return createSupabaseClient(
    supabaseUrl,
    supabasePublishableKey
  );
}
