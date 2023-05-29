<script lang="ts">
	import Button from '@components/Button.svelte';
	import Modal from '@components/Modal.svelte';
	import SafeArea from '@components/SafeArea.svelte';
	import TextArea from '@components/TextArea.svelte';
	import TextInput from '@components/TextInput.svelte';
	import Toggle from '@components/Toggle.svelte';
	import { ArrowLeftIcon, EditIcon, PlusCircleIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
	import { z } from 'zod';
	import { supabase } from '@lib/supabase';
	import type {} from '@sveltejs/kit';
	import { parseError } from '@lib/parseError';
	import { setFlash } from '@stores/flash';
	import { invalidateAll } from '$app/navigation';
	import ModifyCard from '@components/ModifyCard.svelte';

	let showEditModal = false;
	let showAddModal = false;
	let addMoreCards = true;

	let title = $page.data.title;
	let description = $page.data.description;
	let errors: z.ZodFormattedError<typeof editedDeckSchema> = { _errors: [] };

	const editedDeckSchema = z.object({
		title: z
			.string()
			.nonempty('Please enter a title')
			.max(50, "Title can't be longer than 50 characters"),
		description: z.string().max(300, "Description can't be longer than 300 characters")
	});

	const handleEditDeck = async () => {
		errors = { _errors: [] };
		const result = editedDeckSchema.safeParse({ title, description });

		if (!result.success) {
			errors = result.error.format();
			return;
		} else if ($page.data.title === title && $page.data.description === description) {
			showEditModal = false;
			return;
		} else {
			const result = await supabase
				.from('deck')
				.update({ title, description })
				.eq('id', $page.data.id)
				.select();

			if (result.error) {
				return;
			} else {
				await invalidateAll();
				showEditModal = false;
				setFlash({ message: 'Deck updated', code: 'info' });
				return;
			}
		}
	};
</script>

<div class="flex flex-col flex-1">
	<div
		class="flex items-center justify-between w-full sticky top-0 inset-0 z-50 backdrop-blur-sm p-6 md:px-12"
	>
		<a
			class="w-8 h-8 justify-center items-cemter md:px-6 md:py-2 border border-gravel/10 rounded-full inline-flex md:w-max items-center space-x-2 text-gravel hover:border-cream/20 hover:text-cream transition duration-300 ease-in-out small"
			href="/"
		>
			<ArrowLeftIcon size="16" />
			<span class="hidden md:inline">Back to decks</span>
		</a>
		<div class="">
			<ul class="flex gap-x-3 items-center justify-center">
				<li>
					<Button style="secondary" on:click={() => (showEditModal = true)}>
						<span class="hidden md:inline">Edit Deck</span>
						<EditIcon size="16" slot="icon" />
					</Button>
				</li>
				<li>
					<Button style="secondary" on:click={() => (showAddModal = true)}>
						<span class="hidden md:inline">Add card</span>
						<PlusCircleIcon size="16" slot="icon" />
					</Button>
				</li>
				<li>
					<Button type="a" style="primary">Study Deck</Button>
				</li>
			</ul>
		</div>
	</div>
	<SafeArea>
		<slot />
	</SafeArea>
</div>
<Modal bind:show={showEditModal} title="Edit Deck">
	<div class="space-y-4">
		<TextInput
			name="title"
			bind:value={title}
			error={parseError('title', errors)}
			label="Title"
			placeholder="Title"
		/>
		<TextArea
			name="description"
			bind:value={description}
			error={parseError('description', errors)}
			label="Description"
			placeholder="Description"
		/>
	</div>
	<div slot="buttons">
		<ul class="grid gap-2 md:grid-cols-2">
			<li>
				<Button style="secondary" on:click={() => (showEditModal = false)}>Cancel</Button>
			</li>
			<li>
				<Button on:click={handleEditDeck} style="primary">Save</Button>
			</li>
		</ul>
	</div>
</Modal>

<Modal bind:show={showAddModal} title="Add Card">
	<ModifyCard />
	<div slot="buttons" class="space-y-2">
		<div>
			<Toggle bind:value={addMoreCards}>Keep adding cards?</Toggle>
		</div>
		<ul class="grid gap-2 md:grid-cols-2">
			<li>
				<Button style="secondary" on:click={() => (showAddModal = false)}>Cancel</Button>
			</li>
			<li>
				<Button on:click={handleEditDeck} style="primary">Add Card</Button>
			</li>
		</ul>
	</div>
</Modal>
