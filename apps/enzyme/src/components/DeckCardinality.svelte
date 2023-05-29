<script lang="ts">
	export let wrongCount: number;
	export let correctCount: number;
	export let cardCount: number;

	import { XOctagonIcon, CheckCircleIcon, ArchiveIcon } from 'svelte-feather-icons';
</script>

<ul class="flex gap-x-3 items-center">
	<li class="flex items-center gap-x-1">
		<XOctagonIcon size="12" class="text-wrong" />
		<span class="small text-gravel">{wrongCount}</span>
	</li>
	<li class="flex items-center gap-x-1">
		<CheckCircleIcon size="12" class="text-correct" />
		<span class="small text-gravel">{correctCount}</span>
	</li>
	<li class="flex items-center gap-x-1">
		<ArchiveIcon size="12" class="text-gravel" />
		<span class="small text-gravel">{cardCount}</span>
	</li>
</ul>
