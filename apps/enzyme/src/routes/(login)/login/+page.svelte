<script lang="ts">
	import Box from '@components/Box.svelte';
	import Button from '@components/Button.svelte';
	import TextInput from '@components/TextInput.svelte';

	import { z } from 'zod';
	import { supabase } from '@lib/supabase';
	import { parseError } from '@lib/parseError';
	import { goto } from '$app/navigation';

	enum STATUS {
		LOADING = 'loading',
		SUCCESS = 'success',
		ERROR = 'error',
		IDLE = 'idle'
	}

	let email = '';
	let password = '';
	let status = STATUS.IDLE;
	let errors: z.ZodFormattedError<typeof userLoginSchema> = { _errors: [] };
	const userLoginSchema = z.object({
		email: z.string().email('Please enter your email'),
		password: z.string().nonempty('Please enter your password')
	});

	const handleLogin = async () => {
		errors = {};
		status = STATUS.LOADING;
		const result = userLoginSchema.safeParse({ email, password });
		if (!result.success) {
			status = STATUS.ERROR;
			errors = result.error.format();
			console.log(result.error.format());
			return;
		} else {
			const result = await supabase.auth.signInWithPassword({ email, password });
			if (result.error) {
				status = STATUS.ERROR;

				return;
			} else {
				status = STATUS.SUCCESS;
				goto('/');
			}
		}
	};
</script>

<div class="space-y-2">
	<h1 class="text-center">Login to Enzyme<span class="text-glee">.</span></h1>
</div>
<Box withCustomPadding="px-4 py-8">
	<form class="space-y-8">
		<div class="space-y-2">
			<form class="space-y-2" on:submit|preventDefault={handleLogin}>
				<TextInput
					name="email"
					placeholder="Email"
					autocomplete="email"
					bind:value={email}
					error={parseError('email', errors)}
				/>
				<TextInput
					name="password"
					placeholder="Password"
					type="password"
					autocomplete="current-password"
					bind:value={password}
					error={parseError('password', errors)}
				/>
			</form>
			<a href="#" class="tiny inline-block text-cream/20">Forgot your password?</a>
		</div>
		<div>
			<ul class="space-y-2">
				<li>
					<Button
						type="submit"
						on:click={handleLogin}
						style="primary"
						disable={status === STATUS.LOADING}
					>
						{#if status === STATUS.LOADING}
							Logging in...
						{:else}
							Login to Enzyme
						{/if}</Button
					>
				</li>
				<li>
					<Button element="a" href="/register" style="secondary">Actually, I need an account</Button
					>
				</li>
			</ul>
		</div>
	</form>
</Box>
