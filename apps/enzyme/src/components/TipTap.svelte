<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Typogaphy from '@tiptap/extension-typography';
	import { History } from '@tiptap/extension-history';
	import { Italic } from '@tiptap/extension-italic';

	let element: HTMLElement;
	let editor: Editor;
	let content: string;

	onMount(() => {
		editor = new Editor({
			element: element,
			editable: true,
			autofocus: true,
			injectCSS: true,
			extensions: [
				StarterKit.configure({
					paragraph: {
						HTMLAttributes: {
							class: ''
						}
					},
					bulletList: {
						HTMLAttributes: {
							class: 'list-disc pl-8'
						}
					},
					orderedList: {
						HTMLAttributes: {
							class: 'list-decimal pl-8'
						}
					},
					blockquote: false,
					code: false,
					codeBlock: false,
					hardBreak: false,
					horizontalRule: false,
					strike: false
				}),
				Typogaphy
			],
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onBlur: () => {
				content = editor.getHTML();
				console.log(content);
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div
	class="w-full h-full overflow-hidden [&>div]:h-full [&>div]:outline-[0]"
	style="word-break: break-all;"
	bind:this={element}
/>
