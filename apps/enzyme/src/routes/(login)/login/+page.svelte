<script lang="ts">
	import Card from '@components/Card.svelte';
	import Button from '@components/Button.svelte';
	import TextInput from '@components/TextInput.svelte';

	let email = '';
	let password = '';
</script>

<div class="space-y-2">
	<h1 class="text-center">Login to Enzyme<span class="text-glee">.</span></h1>
</div>
<Card withCustomPadding="px-4 py-8">
	<div class="space-y-8">
		<div class="space-y-2">
			<form class="space-y-2">
				<TextInput name="email" placeholder="Email" bind:value={email} />
				<TextInput placeholder="Password" type="password" bind:value={password} />
			</form>
			<a href="#" class="tiny inline-block text-cream/20">Forgot your password?</a>
		</div>
		<div>
			<ul class="space-y-2">
				<li>
					<Button style="primary">Login to Enzyme</Button>
				</li>
				<li>
					<Button type="a" href="/register" style="secondary">Actually, I need an account</Button>
				</li>
			</ul>
		</div>
	</div>
</Card>
