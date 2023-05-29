<script lang="ts">
	import { PlusCircleIcon } from 'svelte-feather-icons';
</script>

<button
	on:click
	class="p-4 h-full flex gap-2 md:gap-1 md:flex-col justify-center items-center border rounded-lg border-cream/10 border-dashed rounded-b-lg text-gravel hover:text-cream hover:border-cream/20 transition duration-300 ease-in-out w-full"
>
	<PlusCircleIcon size="16" />
	<p class="tiny">Add back side</p>
</button>
