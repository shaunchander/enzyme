import { supabase } from '@lib/supabase';
export async function load(ctx) {
	const result = await supabase.from('deck').select().eq('id', ctx.params.slug);

	if (result.error) {
		console.log('sdf');
	} else {
		const data = result.data[0];
		return {
			id: data.id,
			title: data.title,
			description: data.description,
			emoji: '😄',
			folder: 'Psychology',
			wrongCount: data.wrong_count,
			correctCount: data.wrong_count,
			cardCound: data.card_count
		};
	}
}
