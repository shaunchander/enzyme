<script lang="ts">
	import { supabase } from '@lib/supabase';
	import { EditIcon, PlusCircleIcon, TrashIcon } from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';

	export let id: string;
	export let front: string;
	export let back = '';

	let showOptions = false;
	let showModal = false;
	let innerWidth: number;

	const handleDelete = async () => {
		await supabase.from('cards');
	};
</script>

<svelte:window bind:innerWidth />

<div
	class="relative"
	tabIndex={1}
	on:focus={() => (showOptions = true)}
	on:blur={() => (showOptions = false)}
	on:mouseover={() => (showOptions = true)}
	on:mouseleave={() => (showOptions = false)}
>
	{#if showOptions || (innerWidth >= 769 && innerWidth <= 1024)}
		<div
			transition:fly={{ y: 12 }}
			class="md:block hidden md:absolute md:left-0 md:inset-y-0 md:transform -translate-x-full md:pr-4"
		>
			<ul>
				<li>
					<button on:click={() => (showModal = true)} class="text-gravel">
						<EditIcon size="16" />
					</button>
				</li>
				<li>
					<button class="text-wrong">
						<TrashIcon size="16" />
					</button>
				</li>
			</ul>
		</div>
	{/if}

	<div class="md:grid md:grid-cols-2 md:gap-x-3 md:h-32">
		<div class="p-4 bg-charcoal/60 rounded-t-lg md:rounded-lg">
			{@html front}
		</div>
		{#if back}
			<div class="h-px border-t border-cream/30 border-dotted w-11/12 mx-auto md:hidden" />

			<div
				class="p-4 bg-charcoal/60 rounded-b-lg transform translate-y-[-1px] md:translate-y-0 md:rounded-lg"
			>
				{@html back}
			</div>
		{/if}
		{#if !back}
			<button
				class="p-4 flex gap-2 md:gap-1 md:flex-col justify-center items-center border-b md:border-t md:rounded-lg border-x border-cream/10 border-dashed rounded-b-lg text-gravel hover:text-cream hover:border-cream/20 transition duration-300 ease-in-out w-full"
			>
				<PlusCircleIcon size="16" />
				<p class="tiny">Add back side</p>
			</button>
		{/if}
	</div>
</div>

<Modal bind:show={showModal} title="Edit Card">
	<div>
		{front}
	</div>
</Modal>
