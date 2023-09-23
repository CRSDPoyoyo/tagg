<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types';

	let password = '';
	let confirmPassword = '';
	let message = '';

	$: signupDisabled = confirmPassword === '' ? true : password !== confirmPassword;

	const handleSignup: SubmitFunction = ({ cancel }) => {
		if (signupDisabled) {
			cancel();
		}

		return async function ({ update, result }) {
			await update();

			if (result.type === 'success' && result.data) {
				message = result.data.message;
			}
		};
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex justify-center max-w-4xl mx-auto my-24">
	<div class="card max-w-md w-full">
		<header class="card-header">
			<h2>Register</h2>
		</header>
		<section>
			<form method="post" class="flex flex-col gap-2 w-full p-4" use:enhance={handleSignup}>
				<label for="email" class="label">
					<h5>Email</h5>
					<input id="email" name="email" type="email" class="input outline-none" />
				</label>
				<label for="password" class="label">
					<h5>Password</h5>
					<input
						id="password"
						name="password"
						type="password"
						class="input outline-none"
						bind:value={password}
					/>
				</label>
				<label for="confirm-password" class="label">
					<h5>Confirm Password</h5>
					<input
						id="confirm-password"
						name="password"
						type="password"
						class="input outline-none"
						bind:value={confirmPassword}
					/>
				</label>
				<button
					type="submit"
					disabled={signupDisabled}
					class="btn mt-2 variant-filled-secondary"
				>
					Sign up
				</button>
				{message}
			</form>
		</section>
	</div>
</div>
