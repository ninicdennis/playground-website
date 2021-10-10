import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
export default class InitializeApi {
	supabase: SupabaseClient;
	constructor() {
		const url = process.env.REACT_APP_SUPABASE_CLIENT_URL as string;
		const key = process.env.REACT_APP_SUPABASE_CLIENT_SECRET as string;
		this.supabase = createClient(url, key);
	}
	api(): SupabaseClient {
		return this.supabase;
	}
}
