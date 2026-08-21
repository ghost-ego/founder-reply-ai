import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  return createClient(
    "https://lfrfcqfkaiiqpykaluqw.supabase.co",
    "sb_publishable_g5_j08qHLnyaEto_DBSKtA_GUjMN33W"
  );
}
