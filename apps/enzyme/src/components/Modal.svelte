<script lang="ts">
	import { XIcon } from 'svelte-feather-icons';
	import { fade, fly } from 'svelte/transition';
	import { beforeUpdate } from 'svelte';
	import { onMount } from 'svelte';
	import { portal } from '@lib/portal';

	export let title: string;
	export let show: boolean;
	let app: HTMLElement | null;
	let menu: HTMLElement | null;

	let modalContainer: HTMLDivElement;

	onMount(() => {
		app = document.querySelector<HTMLElement>('#app');
		menu = document.querySelector<HTMLElement>('#menu');
	});

	beforeUpdate(() => {
		if (app && menu) {
			if (show) {
				app.style.overflow = 'hidden';
				menu.style.zIndex = '0';
			} else {
				app.style.overflow = 'auto';
				menu.style.zIndex = '20';
			}
		}
	});
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			show = false;
		}
	}}
	on:click={(e) => {
		if (show) {
			if (e.target === modalContainer) {
				show = false;
			}
		}
	}}
/>

{#if show}
	<div
		use:portal
		bind:this={modalContainer}
		transition:fade
		class="fixed inset-0 bg-black/60 backdrop-blur-sm p-6 flex flex-col justify-center items-center z-50"
	>
		<div
			in:fly={{ delay: 0.1, y: 32 }}
			out:fly={{ y: 32 }}
			class="max-w-md w-full bg-charcoal p-6 rounded-lg space-y-4 overflow-auto"
		>
			<div>
				<div class="flex items-center justify-between">
					<h3>{title}<span class="text-glee">.</span></h3>
					<button class="hover:text-glee duration-300 ease-in-out" on:click={() => (show = false)}>
						<XIcon size="16" />
					</button>
				</div>
			</div>
			<div class="w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent h-px" />
			<div>
				<slot />
			</div>
			<div>
				<slot name="buttons" />
			</div>
		</div>
	</div>
{/if}

<!-- <div class="fixed inset-0 bg-black/60 flex flex-col items-center justify-center">
	<div
		class="rounded-lg w-2/5 mx-auto border-glee/20 border bg-charcoal p-6 space-y-6 relative overflow-hidden"
	>
		<div class="space-y-2">
			<h2>Grind Mode<span class="text-glee">.</span></h2>
			<p class="small">Quickly run through your deck(s) when you have an exam coming up.</p>
		</div>
		<div class="space-y-2">
			<p class="tiny">Select a deck (or multiple) to run through.</p>
			<ul
				class="rounded-lg bg-charcoal border border-cream/10 divide-y divide-cream/5 divide-dashed overflow-hidden"
			>
				<li class="">
					<button
						on:click={() => (selected = [...selected, true])}
						class="w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left flex gap-x-2 items-center"
					>
						{#if selected[0]}
							<CheckIcon size="16" class="text-correct" />
						{/if}
						<span>Psychology terms</span>
					</button>
				</li>
				<li class="">
					<button
						class="block w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left"
						>Things I need for Step I</button
					>
				</li>
				<li class="">
					<button
						class="block w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left"
						>Organic Chemistry</button
					>
				</li>
				<li class="">
					<button
						class="block w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left"
						>Anatomy & Physiology</button
					>
				</li>
				<li class="">
					<button
						class="block w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left"
						>Kinematic formulas for physics</button
					>
				</li>
				<li class="">
					<button
						on:click={() => (selected = [...selected, true])}
						class="w-full p-3 hover:bg-cream/5 transition duration-300 ease-in-out text-left flex gap-x-2 items-center"
					>
						{#if selected[1]}
							<CheckIcon size="16" class="text-correct" />
						{/if}
						<span>Mind blowing facts about animals</span>
					</button>
				</li>
			</ul>
		</div>
		<div class="flex justify-center">
			<a
				class="block"
				href="/study"
				on:click={() => {
					ref();
				}}
			>
				<Button>
					<span>Start the Grind</span>
					<ZapIcon slot="icon" size="16" />
				</Button>
			</a>
		</div>
	</div>
</div> -->
