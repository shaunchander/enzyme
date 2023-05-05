<script lang="ts">
	import DeckInput from '@components/DeckInput.svelte';
	import { scale } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let cards = [];
	import { PlusCircleIcon } from 'svelte-feather-icons';
</script>

<div>
	<ul class="space-y-2">
		{#each cards as card, i}
			<li transition:scale={{ easing: quintInOut }} class="flex items-center gap-x-2">
				<div class="w-1/2">
					<DeckInput />
				</div>
				<div class="w-1/2">
					{#if card.answer}
						<div class="w-full" transition:scale={{ easing: quintInOut }}>
							<DeckInput />
						</div>
					{:else}
						<button
							on:click={() => {
								cards = cards.map((_, index) => {
									if (index === i) {
										return {
											answer: '1',
											question: ''
										};
									} else
										return {
											answer: '',
											question: ''
										};
								});
							}}
							id="test"
							class="rounded-lg bg-charcoal/5 border-2 border-dashed border-gravel/10 w-full flex-1 p-4 text-cream/60 flex flex-col justify-center items-center space-y-2 h-36"
						>
							<PlusCircleIcon size="20" />
							<span class="tiny">Add back side</span>
						</button>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
	<button
		class="rounded-lg border-2 border-dashed border-cream/10 p-6 text-cream/60 flex justify-center items-center w-full hover:text-cream hover:border-cream/60 duration-300 transition ease-in-out gap-x-2"
		class:mt-8={cards.length > 0}
		on:click={() => {
			console.log(cards);
			cards = [...cards, { question: '', answer: '' }];
		}}
	>
		<PlusCircleIcon size="20" />
		<p>Add a new card</p>
	</button>
</div>
