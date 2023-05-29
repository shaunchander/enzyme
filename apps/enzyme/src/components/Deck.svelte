<script lang="ts">
	export let id: number;
	export let title = '';
	export let wrongCount = 0;
	export let correctCount = 0;
	export let cardCount = 0;

	import Box from '@components/Box.svelte';
	import DeckCardinality from './DeckCardinality.svelte';
</script>

<Box withHoverEffect>
	<a href={`/decks/${id}`} class="h-36 flex flex-col flex-1 lg:h-40">
		<div class="flex-1">
			<h2>{title}</h2>
		</div>
		<div>
			<DeckCardinality {cardCount} {wrongCount} {correctCount} />
		</div>
	</a>
</Box>
