import { supabase } from './supabase';
import { goto } from '$app/navigation';
import { page } from '$app/stores';

export const verifySession = () => {
	page.subscribe(async (value) => {
		if (value.url) {
			const result = await supabase.auth.getSession();

			if (!result.data.session) {
				if (!(value.url.pathname === '/login' || value.url.pathname === '/register')) {
					goto('/login');
					return;
				}
			} else if (value.url.pathname === '/login' || value.url.pathname === '/register') {
				goto('/');
				return;
			} else {
				return;
			}
		}
	});
};
