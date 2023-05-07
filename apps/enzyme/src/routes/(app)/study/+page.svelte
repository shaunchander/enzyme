<script lang="ts">
	import { page } from '$app/stores';
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
			question: 'Which kind of shrimp has the most complex visual systems',
			answer: 'Mantis Shrimp'
		},
		{
			question: 'What is the largest land animal and how much does it weigh?',
			answer: 'The African elephant is the largest, it can weigh up to 14,000 pounds.'
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
		},
		{
			question: 'Which mammal can lay eggs?',
			answer: 'The platypus'
		}
	];

	onMount(() => {
		document.addEventListener('keypress', (e) => {
			if (e.keyCode === 32) {
				if (show === true) {
					show = false;
					handleNext();
					return;
				}
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
		<div class="space-y-2">
			<h1 class="text-center">Grind mode <span class="text-glee">.</span></h1>
			<ul class="flex gap-x-2 justify-center">
				<li>
					<div class="px-4 py-1 rounded-full border border-cream/10">
						<span class="small">Psychology terms</span>
					</div>
				</li>
				<li>
					<div class="px-4 py-1 rounded-full border border-cream/10">
						<span class="small">Mind blowing facts about animals</span>
					</div>
				</li>
			</ul>
		</div>
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
		{#if show && !$page.data.grind}
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
