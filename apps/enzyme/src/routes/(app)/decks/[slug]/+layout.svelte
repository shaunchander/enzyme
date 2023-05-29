<script lang="ts">
	import Button from '@components/Button.svelte';
	import DeckCardinality from '@components/DeckCardinality.svelte';
	import { PlusIcon } from 'svelte-feather-icons';
	export let data;
</script>

<div
	class="border-x border-t border-cream/10 lg:mx-auto rounded-t-3xl p-6 md:p-12 bg-gradient-to-br from-cream/5 to-transparent max-w-5xl space-y-8 flex flex-1 flex-col overflow-hidden transform translate-y-6 md:translate-y-12 w-full h-full"
>
	<div class="text-center space-y-4 md:space-y-6">
		<div class="max-w-lg mx-auto space-y-2">
			<h1 class="h1">{data.title}</h1>
			<p class="text-ellipsis overflow-hidden">{data.description}</p>
		</div>

		<div class="space-y-4 md:space-y-0 md:flex md:items-center md:justify-center md:gap-x-4">
			<div class="flex items-center justify-center">
				<div class="h-8 w-8 rounded-l-lg bg-charcoal flex items-center justify-center">
					<span>{data.emoji}</span>
				</div>
				<div class="h-8 px-4 bg-charcoal/60 rounded-r-lg flex items-center space-x-2">
					<span class="small">{data.folder}</span>
				</div>
			</div>
			<div class="flex justify-center">
				<DeckCardinality
					wrongCount={data.wrongCount}
					correctCount={data.correctCount}
					cardCount={data.cardCound}
				/>
			</div>
		</div>
	</div>
	<div class="w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent h-px" />
	<div class="flex-1 grid gap-3">
		<slot />
	</div>
	<div>
		<div class="hidden md:max-w-md md:mx-auto">
			<Button style="secondary"
				>Add card
				<PlusIcon slot="icon" size="16" />
			</Button>
		</div>
	</div>
</div>
