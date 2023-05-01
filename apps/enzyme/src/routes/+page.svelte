<script lang="ts">
	import Deck from '@components/Deck.svelte';
	import Button from '@components/Button.svelte';
	import Card from '@components/Card.svelte';

	import { ZapIcon, PlusIcon } from 'svelte-feather-icons';
</script>

<div class="space-y-12 md:h-full md:flex md:flex-col">
	<div class="space-y-6 md:flex-1">
		<div class="space-y-6">
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				<Deck title="Psychology terms" wrongCount={5} correctCount={90} cardCount={95} />
				<Deck title="Things I need for Step I" wrongCount={80} correctCount={120} cardCount={200} />
				<Deck title="Organic chemistry" wrongCount={12} correctCount={20} cardCount={32} />
				<Deck title="Anatomy & physiology" wrongCount={120} correctCount={200} cardCount={320} />
				<Deck
					title="Kinematic formulas for physics"
					wrongCount={8}
					correctCount={4}
					cardCount={10}
				/>
				<Deck
					title="Mind blowing facts about animals"
					wrongCount={3}
					correctCount={12}
					cardCount={15}
				/>
			</div>
		</div>
	</div>
	<div class="w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent h-px" />
	<div class="space-y-6">
		<div>
			<h1>Your stats<span class="text-glee">.</span></h1>
		</div>
		<div class="space-y-6 md:space-y-0 md:flex md:gap-4 md:items-stretch">
			<div class="md:w-full lg:max-w-[200px]">
				<Card>
					<div
						class="flex flex-row justify-center items-center h-24 gap-x-2 lg:gap-x-0 lg:flex-col"
					>
						<p class="h2 transform translate-y-[-2px]">🔥 4</p>
						<p class="h2">day streak</p>
					</div>
				</Card>
			</div>
			<div class="md:w-full md:h-full lg:max-w-[342px]">
				<Card>
					<div class="space-y-3 min-h-[96px]">
						<div>
							<h3 class="small">April</h3>
						</div>
						<div>
							<ul class="flex flex-wrap gap-2">
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-gray-700 rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-gray-700 rounded-sm" />
								<li class="w-4 h-4 bg-gray-700 rounded-sm" />
								<li class="w-4 h-4 bg-gray-700 rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-gray-700 rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
								<li class="w-4 h-4 bg-correct rounded-sm" />
							</ul>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</div>
</div>
