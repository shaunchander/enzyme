<script lang="ts">
	import { BoldIcon, ItalicIcon, ListIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let showFormatOptions = false;
	let source = '';
	const tokens = marked.lexer(source);
	console.log(tokens);

	const handleFormattingOptions = () => {
		showFormatOptions = !showFormatOptions;
	};

	onMount(() => {
		var options = {
			debug: 'info',
			modules: {
				toolbar: '#toolbar'
			},
			placeholder: 'Compose an epic...',
			readOnly: true,
			theme: 'snow'
		};
		var editor = new Quill('.editor', options);
	});
</script>

<div class="h-full relative w-full">
	{#if showFormatOptions}
		<div
			transition:fade={{ easing: quintInOut }}
			class="absolute z-10 top-0 inset-x-0 px-4 py-1 bg-charcoal/60 backdrop-blur-sm rounded-t-lg"
		>
			<ul class="flex items-center justify-end gap-x-2">
				<li>
					<button class="rounded-sm bg-black block p-1">
						<BoldIcon size="12" />
						<span class="sr-only">Bold</span>
					</button>
				</li>
				<li>
					<button>
						<ItalicIcon size="12" />
						<span class="sr-only">Bold</span>
					</button>
				</li>
				<li>
					<button>
						<ListIcon size="12" />
						<span class="sr-only">Bold</span>
					</button>
				</li>
				<li>
					<button />
				</li>
			</ul>
		</div>
	{/if}
	<div id="toolbar" />
	<div
		class="editor rounded-lg focus:outline-none bg-charcoal/60 resize-none block h-36 relative overflow-auto w-full pt-10 px-4 pb-4"
	/>
</div>
