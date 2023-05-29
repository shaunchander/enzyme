<script lang="ts">
	export let style: 'primary' | 'secondary' = 'primary';
	export let element: 'button' | 'a' = 'button';
	import { cn } from 'nano-classnames';

	const styles = {
		primary: 'bg-glee text-charcoal border border-transparent hover:bg-darkGlee',
		secondary: 'border border-gravel/10 text-gravel hover:text-cream hover:border-cream/20'
	};
</script>

<svelte:element
	this={element}
	class={cn(
		'inline-flex items-center p-4 gap-x-2 tiny rounded-lg transition duration-300 ease-in-out w-full justify-center touch-ripple-slate-100',
		styles[style]
	)}
	on:click
	{...$$restProps}
>
	<slot /> <slot name="icon" /></svelte:element
>
