<script lang="ts">
	import { scale } from 'svelte/transition';
	import AddBackSide from './AddBackSide.svelte';
	import TipTap from './TipTap.svelte';

	let front;
	let back;
	let element: HTMLElement;
	let enableBackSide = false;

	const toggleBackSide = () => {
		if (enableBackSide) {
			back = '';
		}
		enableBackSide = !enableBackSide;
	};
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Tab') {
			toggleBackSide();
		}
	}}
/>

<div class="grid gap-2">
	<div class="space-y-2">
		<p class="text-gravel small">Front Side</p>
		<div class="rounded-lg p-4 md:p-6 bg-ash overflow-auto h-40">
			<TipTap />
		</div>
	</div>
	{#if enableBackSide}
		<div class="space-y-2">
			<div class="flex gap-x-2">
				<p class="text-gravel small">Back Side</p>
				<button class="text-gravel tiny hover:underline" on:click={toggleBackSide}>(Remove?)</button
				>
			</div>
			<div in:scale class="rounded-lg p-4 md:p-6 bg-ash overflow-auto h-40">
				<TipTap />
			</div>
		</div>
	{:else}
		<div class="h-40">
			<AddBackSide on:click={toggleBackSide} />
		</div>
	{/if}
</div>
