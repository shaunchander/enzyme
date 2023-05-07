<script lang="ts">
	export let style: 'primary' | 'secondary' = 'primary';
	export let type: 'button' | 'a' = 'button';
	import { cn } from 'nano-classnames';

	const styles = {
		primary: 'bg-glee text-charcoal border border-transparent hover:bg-darkGlee',
		secondary: 'border border-gravel/10 text-gravel hover:text-cream hover:border-cream/20'
	};
</script>

<svelte:element
	this={type}
	class={cn(
		'inline-flex items-center p-4 gap-x-2 small rounded-lg transition duration-300 ease-in-out w-full justify-center',
		styles[style]
	)}
	on:click
	{...$$restProps}
>
	<span><slot /></span> <slot name="icon" /></svelte:element
>
