<script lang="ts">
	export let style: 'primary' | 'secondary' = 'primary';
	import { cn } from 'nano-classnames';

	const styles = {
		primary: 'bg-glee text-charcoal border border-transparent hover:bg-darkGlee',
		secondary: 'border border-gravel/10 text-gravel hover:text-cream hover:border-cream/20'
	};
</script>

<button
	class={cn(
		'inline-flex items-center p-4 gap-x-2 tiny rounded-lg transition duration-300 ease-in-out',
		styles[style]
	)}
>
	<span><slot /></span> <slot name="icon" /></button
>
