<script>
	import Button from '@components/Button.svelte';
	import { ZapIcon, CheckIcon } from 'svelte-feather-icons';

	let selected = [];

	export let ref;
</script>

<div class="fixed inset-0 bg-black/60 flex flex-col items-center justify-center">
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
</div>
