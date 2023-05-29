<script lang="ts">
	import Box from '@components/Box.svelte';
	import Button from '@components/Button.svelte';
	import TextInput from '@components/TextInput.svelte';

	import { z } from 'zod';
	import { supabase } from '@lib/supabase';
	import { CheckCircleIcon } from 'svelte-feather-icons';
	import { parseError } from '@lib/parseError';

	enum STATUS {
		LOADING = 'loading',
		SUCCESS = 'success',
		ERROR = 'error'
	}

	let email = '';
	let password = '';
	let confirmPassword = '';
	let errors: z.inferFormattedError<typeof userRegistrationSchema> = { _errors: [] };
	let status = '';

	const userRegistrationSchema = z
		.object({
			email: z.string().email('Please use a valid email address'),
			password: z.string().min(6, 'Password must be at least 6 characters'),
			confirmPassword: z.string().min(6, 'Password must be at least 6 character')
		})
		.superRefine(({ password, confirmPassword }, ctx) => {
			if (password !== confirmPassword) {
				ctx.addIssue({
					code: 'custom',
					message: 'Passwords do not match',
					path: ['confirmPassword']
				});
			}
		});

	const handleRegistration = async () => {
		status = STATUS.LOADING;
		errors = { _errors: [] };
		const result = userRegistrationSchema.safeParse({ email, password, confirmPassword });

		if (!result.success) {
			errors = result.error.format();
			status = STATUS.ERROR;
			return;
		} else {
			const result = await supabase.auth.signUp({ email, password });
			if (result.error) {
				status = STATUS.ERROR;
				errors = {
					email: { _errors: [result.error.message] }
				};
				return;
			} else {
				status = STATUS.SUCCESS;
				return;
			}
		}
	};
</script>

<div class="space-y-2">
	<h1 class="text-center">Create an account<span class="text-glee">.</span></h1>
	<p class="text-center text-gravel">
		Sign up for Enzyme, the flashcards app built for premed and med students.
	</p>
</div>
<Box withCustomPadding="px-4 py-8">
	{#if status === STATUS.SUCCESS}
		<div class="space-y-2">
			<div>
				<CheckCircleIcon class="text-correct w-10 h-10 mx-auto" />
			</div>
			<div>
				<p class="text-gravel text-center">
					Thanks for signing up! Before you can access Enzyme, you'll need to verify your email. We
					sent you a verification link to your inbox.
				</p>
			</div>
		</div>{:else}
		<form on:submit:preventDefault={handleRegistration} class="space-y-8">
			<div class="space-y-2">
				<div class="space-y-2">
					<TextInput
						name="email"
						placeholder="Email"
						type="email"
						bind:value={email}
						error={parseError('email', errors)}
					/>
					<TextInput
						name="password"
						placeholder="Password"
						type="password"
						autocomplete="new-password"
						bind:value={password}
						error={parseError('password', errors)}
					/>
					<TextInput
						name="confirm_password"
						placeholder="Confirm Password"
						type="password"
						autocomplete="new-password"
						bind:value={confirmPassword}
						error={parseError('confirmPassword', errors)}
					/>
				</div>
			</div>
			<div>
				<ul class="space-y-2">
					<li>
						<Button
							type="submit"
							on:click={handleRegistration}
							style="primary"
							disabled={status === STATUS.LOADING}>Create my account!</Button
						>
					</li>
					<li>
						<Button element="a" href="/login" style="secondary"
							>I got an account, login instead.</Button
						>
					</li>
				</ul>
			</div>
		</form>
	{/if}
</Box>
