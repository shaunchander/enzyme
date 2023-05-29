<script lang="ts">
	import Deck from '@components/Deck.svelte';
	import Button from '@components/Button.svelte';
	import Box from '@components/Box.svelte';

	import { ZapIcon, PlusIcon, ArrowLeftIcon, FrownIcon } from 'svelte-feather-icons';
	import Modal from '@components/Modal.svelte';
	import TextInput from '@components/TextInput.svelte';
	import TextArea from '@components/TextArea.svelte';
	import { parseError } from '@lib/parseError.js';
	import { z } from 'zod';
	import { supabase } from '@lib/supabase.js';
	import { goto } from '$app/navigation';
	import SafeArea from '@components/SafeArea.svelte';

	enum STATUS {
		IDLE = 'idle',
		LOADING = 'loading',
		SUCCESS = 'success',
		ERROR = 'error'
	}

	export let data;
	let showModal = false;
	let status = STATUS.IDLE;
	let errors: z.ZodFormattedError<typeof newDeckSchema> = {};

	let newDeck = {
		title: '',
		description: ''
	};

	const newDeckSchema = z.object({
		title: z
			.string()
			.nonempty('Please enter a title')
			.max(50, "Title can't be longer than 50 characters"),
		description: z.string().max(300, "Description can't be longer than 300 characters")
	});

	const handleNewDeck = async () => {
		errors = { _errors: [] };
		const result = newDeckSchema.safeParse(newDeck);

		if (!result.success) {
			errors = result.error.format();
			status = STATUS.ERROR;
			return;
		} else {
			const user_id = (await supabase.auth.getSession()).data.session?.user.id;
			const result = await supabase
				.from('deck')
				.insert({
					title: newDeck.title,
					description: newDeck.description,
					user_id
				})
				.select();

			if (result.error) {
				status = STATUS.ERROR;
				console.log(result.error);
				return;
			} else {
				status = STATUS.SUCCESS;
				goto(`/decks/${result.data[0].id}`);
				return;
			}
		}
	};
</script>

<SafeArea>
	<div class="mb-6 md:flex md:justify-between md:items-center">
		<h1>Your decks<span class="text-glee">.</span></h1>
		<span />
		<div class="hidden md:block">
			<ul class="flex items-center gap-x-4">
				<li>
					<Button
						on:click={() => {
							showModal = true;
						}}
						style="primary"
					>
						Create New Deck
						<PlusIcon slot="icon" size="16" />
					</Button>
				</li>
				<!-- <li on:click={() => (open = true)}>
				<!-- <Button style="primary">
					Grind Mode
					<ZapIcon slot="icon" size="16" />
				</Button> -->
				<!-- </li> -->
			</ul>
		</div>
	</div>

	<div class="space-y-12 md:h-full md:flex md:flex-1 md:flex-col">
		<div class="space-y-6 md:flex-1">
			<div class="space-y-6">
				{#if data.decks && data.decks.length > 0}
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
						{#each data.decks as deck}
							<Deck
								id={deck.id}
								title={deck.title ?? ''}
								cardCount={deck.card_count}
								wrongCount={deck.wrong_count}
								rightCount={deck.correct_count}
							/>
						{/each}
					</div>
				{:else}
					<div
						class="border border-dashed text-gravel flex flex-col justify-center items-center space-y-2 border-cream/20 rounded-lg p-6 max-w-2xl mx-auto"
					>
						<FrownIcon size="24" />
						<p>You have no decks!</p>
						<div>
							<Button style="primary" type="a" href="/decks/new">
								Create New Deck
								<PlusIcon slot="icon" size="16" /></Button
							>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent h-px" />
		<div class="space-y-6">
			<div>
				<h1>Your stats<span class="text-glee">.</span></h1>
			</div>
			<div class="space-y-6 md:space-y-0 md:flex md:gap-4 md:items-stretch">
				<div class="md:w-full lg:max-w-[200px]">
					<Box>
						<div
							class="flex flex-row justify-center items-center h-24 gap-x-2 lg:gap-x-0 lg:flex-col"
						>
							<p class="h1 transform translate-y-[-2px]">🔥 4</p>
							<p class="h2">day streak</p>
						</div>
					</Box>
				</div>
				<div class="md:w-full md:h-full lg:max-w-[342px]">
					<Box>
						<div class="space-y-3 min-h-[96px]">
							<div>
								<h3 class="small">April</h3>
							</div>
							<div>
								<ul class="flex flex-wrap gap-2">
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-gray-700 rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-gray-700 rounded-sm" />
									<li class="w-4 h-4 bg-gray-700 rounded-sm" />
									<li class="w-4 h-4 bg-gray-700 rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-gray-700 rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
									<li class="w-4 h-4 bg-correct rounded-sm" />
								</ul>
							</div>
						</div>
					</Box>
				</div>
				<div>
					<Box>
						<div class="min-h-[96px] flex flex-col justify-center items-center">
							<p class="h1">100</p>
							<p class="h3">cards reviewed</p>
						</div>
					</Box>
				</div>
			</div>
		</div>
	</div>
</SafeArea>

<div class="fixed bottom-24 right-4 z-50 md:hidden">
	<button
		on:click={() => {
			showModal = true;
		}}
		class="w-12 h-12 flex items-center justify-center text-charcoal shadow-lg shadow-glee/20 bg-glee rounded-full"
	>
		<span class="sr-only">Add new deck</span>
		<PlusIcon size="20" />
	</button>
</div>

<Modal title="Create New Deck" bind:show={showModal}>
	<div class="space-y-6">
		<div class="space-y-2">
			<TextInput
				name="title"
				label="Title"
				showLabel
				placeholder="Title"
				error={parseError('title', errors)}
				bind:value={newDeck.title}
			/>
			<TextArea
				name="description"
				label="Description"
				showLabel
				placeholder="Description"
				error={parseError('description', errors)}
				bind:value={newDeck.description}
			/>
		</div>
		<div>
			<Button on:click={handleNewDeck} style="primary">Create Deck</Button>
		</div>
	</div>
</Modal>
