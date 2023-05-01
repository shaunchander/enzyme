<script lang="ts">
	import { EditIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
</script>

<div class="h-full transform translate-y-5 md:translate-y-12">
	<div
		class="border-x border-t border-cream/10 lg:mx-auto rounded-t-3xl p-10 bg-gradient-to-br from-cream/5 to-transparent h-full lg:max-w-4xl space-y-12"
	>
		<div class="text-center space-y-4">
			<h1 class="h1">{$page.data.name}</h1>
			<p>{$page.data.description}</p>
			<div>
				<ul>
					<li class="flex items-center justify-center">
						<div class="h-8 w-8 rounded-l-lg bg-charcoal flex items-center justify-center">
							{$page.data.emoji}
						</div>
						<div class="h-8 px-4 bg-charcoal/60 rounded-r-lg flex items-center space-x-2">
							<span class="small">{$page.data.category}</span>
						</div>
						<EditIcon size="12" class="text-gravel/60 ml-4" />
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div
				class="w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent h-px mb-12"
			/>
			<slot />
		</div>
	</div>
</div>
