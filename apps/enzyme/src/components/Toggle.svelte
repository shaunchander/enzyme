<script lang="ts">
	import { cn } from 'nano-classnames';
	export let value = false;
</script>

<button
	on:click={() => {
		value = !value;
	}}
	class="flex items-center gap-x-3"
>
	<span class="sr-only"
		>Toggle
		{#if value}
			currently set to on
		{:else}
			currently set to off
		{/if}
	</span>
	<p class="small text-gravel">
		<slot />
	</p>
	<div class="w-10 h-5 rounded-full border border-cream/10 relative">
		<div class="absolute px-[1px] inset-0 flex items-center justify-start">
			<div
				class={cn('w-4 h-4 rounded-full transition duration-300 ease-in-out', [
					value,
					'bg-glee shadow-md shadow-glee/10 translate-x-[122%]',
					'bg-ash'
				])}
			/>
		</div>
	</div>
</button>
