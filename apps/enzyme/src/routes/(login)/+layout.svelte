<script lang="ts">
	import SafeArea from '@components/SafeArea.svelte';
</script>

<SafeArea>
	<div class="mx-auto space-y-8 max-w-xs flex flex-col flex-1 justify-center">
		<slot />
	</div>
</SafeArea>
