import { supabase } from '@lib/supabase';
export async function load() {
	const result = await supabase.from('deck').select().order('updated_at', { ascending: false });

	return {
		decks: result.data
	};
}
