import { env } from '$env/dynamic/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: env.PUBLIC_SUPABASE_URL!,
		supabaseKey: env.PUBLIC_SUPABASE_ANON_KEY!,
		event: { fetch },
		serverSession: data.session ?? null
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
