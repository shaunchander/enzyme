<script lang="ts">
	export let title: string;
	export let wrongCount: number;
	export let correctCount: number;
	export let cardCount: number;

	import Card from '@components/Card.svelte';

	import { XOctagonIcon, CheckCircleIcon, ArchiveIcon } from 'svelte-feather-icons';
</script>

<Card>
	<a href="/decks/psychology-terms" class="h-36 flex flex-col flex-1 lg:h-40">
		<div class="flex-1">
			<h2>{title}</h2>
		</div>
		<div>
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
		</div>
	</a>
</Card>
