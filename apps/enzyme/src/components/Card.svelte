<script lang="ts">
	import { cn } from 'nano-classnames';
	export let withCustomPadding = '';
</script>

<div
	class={cn(
		'border border-cream/10 rounded-lg bg-gradient-to-br from-cream/5 to-transparent overflow-hidden',
		[withCustomPadding, withCustomPadding, 'p-4 md:p-6']
	)}
>
	<slot />
</div>
