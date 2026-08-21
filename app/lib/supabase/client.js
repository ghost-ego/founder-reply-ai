import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://lfrfcqfkaiiqpykaluqw.supabase.co/rest/v1/",
    "sb_publishable_g5_j08qHLnyaEto_DBSKtA_GUjMN33W"
  );
}
