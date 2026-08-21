import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL =
  "https://lfrfcqfkaiiqpykaluqw.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_g5_j08qHLnyaEto_DBSKtA_GUjMN33W";

export function createClient() {
  return createBrowserClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}
