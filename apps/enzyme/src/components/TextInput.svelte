<script lang="ts">
	import { cn } from 'nano-classnames';
	import { slide } from 'svelte/transition';

	export let type = 'text';
	export let name: string;
	export let value: string;
	export let label: string = '';
	export let error = '';

	function setInputType(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="relative">
	<label class="space-y-1" for={name}>
		<span class="inline-block small text-gravel" class:sr-only={!label}>{label || name}</span>
		<input
			use:setInputType
			id={name}
			{name}
			bind:value
			class={cn(
				'rounded-lg p bg-transparent text-cream border p-4 w-fulltransition duration-300 ease-in-out w-full',
				[
					error.length > 0,
					'border-wrong focus-visible:ring-0',
					'border-cream/10  hover:border-cream/20'
				]
			)}
			{...$$restProps}
		/>
	</label>
	{#if error}
		<div in:slide class="bg-wrong p-1 rounded-b-lg transform -translate-y-2">
			<p class="tiny">{error}</p>
		</div>
	{/if}
</div>
