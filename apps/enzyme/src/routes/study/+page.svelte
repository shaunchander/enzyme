<script lang="ts">
	import Card from '@components/Card.svelte';
	import { cn } from 'nano-classnames';
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = false;
	let index = 0;

	let questions = [
		{
			question: 'What are V1 cells?',
			answer: 'These cells are orientation selective.'
		},
		{
			question: 'What are simple cells?',
			answer: 'They are cells with distinct <strong>ON</strong> and <strong>OFF</strong> regions.'
		},
		{
			question: "Functional pairs are sensitive to <span id='cloze' class='hide'>rotation</span>"
		},
		{
			question: "Describe a Merkel's disk receptor",
			answer: `<ul class="list-disc list-inside p">
					<li>Large receptive field</li>
					<li>Slowly adapting detections</li>
					<li>Detects <em>__very low__</em> frequencies</li>
				</ul>`
		},
		{
			question: "What is a Ruffuni's ending",
			answer: 'Large receptive field, slowly adapting, detects very low frequencies'
		}
	];

	onMount(() => {
		document.addEventListener('keypress', (e) => {
			if (e.keyCode === 32) {
				show = true;
			}
		});
	});
	afterUpdate(() => {
		if (show && document.querySelector('#cloze')) {
			document.querySelector('#cloze').classList.remove('hide');
			document.querySelector('#cloze').classList.add('show');
		}
	});
	const handleNext = () => {
		index++;
		show = false;
	};
</script>

<div class="flex-1 flex flex-col mt-8">
	<div class="flex-1 space-y-12">
		<h1 class="text-center">Psychology terms</h1>
		<div class="max-w-2xl mx-auto">
			<Card>
				<button on:click={() => (show = true)} class="space-y-6 min-h-[240px] block w-full">
					<div
						class={cn([
							show && questions[index].answer,
							'',
							'flex flex-col justify-center items-center min-h-[240px]'
						])}
					>
						<p class="h2">{@html questions[index].question}</p>
					</div>
					{#if show && questions[index].answer}
						<div
							class="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent"
						/>

						<p>
							{@html questions[index].answer}
						</p>
					{/if}
				</button>
			</Card>
		</div>
	</div>
	<div>
		{#if show}
			<ul transition:fade class="grid grid-cols-3 text-center gap-x-4">
				<li>
					<button
						on:click={handleNext}
						class="bg-ash rounded-lg p-1 md:p-3 border border-cream/10 w-full hover:bg-cream/5 transition duration-300 ease-in-out"
					>
						<p>😏 Easy</p>
					</button>
				</li>
				<li>
					<button
						on:click={handleNext}
						class="bg-ash rounded-lg p-1 md:p-3 border border-cream/10 w-full hover:bg-cream/5 transition duration-300 ease-in-out"
					>
						<p>🙂 Normal</p>
					</button>
				</li>
				<li>
					<button
						on:click={handleNext}
						class="bg-ash rounded-lg p-1 md:p-3 border border-cream/10 w-full hover:bg-cream/5 transition duration-300 ease-in-out"
					>
						<p>😬 Hard</p>
					</button>
				</li>
			</ul>
		{/if}
	</div>
</div>
