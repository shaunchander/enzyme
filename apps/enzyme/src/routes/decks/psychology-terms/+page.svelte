<script lang="ts">
	import { PlusCircleIcon } from 'svelte-feather-icons';
</script>

<div>
	<ul class="space-y-2">
		<li class="flex items-center gap-x-2">
			<div class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm">What are V1 cells?</span>
			</div>
			<div id="test" class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm">These cells are orientation selective.</span>
			</div>
		</li>
		<li class="flex items-center gap-x-2">
			<div class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm">What are simple cells?</span>
			</div>
			<div id="test" class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm"
					>They are cells with distinct <strong>**ON**</strong> and <strong>**OFF**</strong> regions.</span
				>
			</div>
		</li>
		<li class="flex items-center gap-x-2">
			<div class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm"
					>Functional pairs are sensitive to <span class="rounded-lg bg-black p-1"
						>||rotation||</span
					>
				</span>
			</div>
			<div
				id="test"
				class="rounded-lg bg-charcoal/5 border-2 border-dashed border-gravel/5 h-32 flex-1 p-4 text-gravel flex flex-col justify-center items-center space-y-2"
			>
				<PlusCircleIcon size="20" />
				<span class="tiny">Add back side</span>
			</div>
		</li>
		<li class="flex items-center gap-x-2">
			<div class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm">Describe a Merkel's disk receptor</span>
			</div>
			<div id="test" class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<ul class="list-disc list-inside text-sm">
					<li>Large receptive field</li>
					<li>Slowly adapting detections</li>
					<li>Detects <em>__very low__</em> frequencies</li>
				</ul>
			</div>
		</li>
		<li class="flex items-center gap-x-2">
			<div class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm">What is a Ruffuni's ending</span>
			</div>
			<div id="test" class="rounded-lg bg-charcoal/60 h-32 flex-1 p-4">
				<span class="text-sm"
					>Large receptive field, slowly adapting, detects very low frequencies</span
				>
			</div>
		</li>
	</ul>
</div>
