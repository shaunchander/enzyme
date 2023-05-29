<script lang="ts">
	import { cn } from 'nano-classnames';
	export let withCustomPadding = '';
	export let withHoverEffect = false;
</script>

<div
	class={cn(
		'border border-cream/10 rounded-lg bg-gradient-to-br from-cream/5 to-transparent overflow-hidden',
		[withCustomPadding.length > 0, withCustomPadding, 'p-4 md:p-6'],
		[withHoverEffect, 'hover:bg-cream/5 transition duration-300 ease-in-out']
	)}
>
	<slot />
</div>
