<script lang="ts">
	import { flashStore } from '@stores/flash';
	import { fade } from 'svelte/transition';

	const emojis = {
		success: '🎉',
		error: '🚨',
		warning: '⚠️',
		info: 'ℹ️'
	};
</script>

{#if $flashStore.code !== ''}
	<div
		transition:fade
		class="inset-0 fixed pointer-events-none px-6 pb-24 md:p-12 flex flex-col justify-end items-center z-50"
	>
		<div class="p-2 bg-correct shadow-lg shadow-darkGlee/10 border-cream/10 border rounded-lg">
			<p>{emojis[$flashStore.code]} {$flashStore.message}</p>
		</div>
	</div>
{/if}
