<script lang="ts">
	import FlashMessage from '@components/FlashMessage.svelte';
	import '@styles/plein.css';
	import '@styles/switzer.css';
	import '@styles/tailwind.css';
	import { App } from 'konsta/svelte';
</script>

<App theme="material" safeAreas>
	<main class="h-full flex flex-col relative">
		<slot />
	</main>
	<FlashMessage />
</App>
