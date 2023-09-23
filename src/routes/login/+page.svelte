<script lang="ts">
	import { enhance } from '$app/forms';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import type { SubmitFunction } from './$types';

	let tabSet = 0;
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

	const handleLogin: SubmitFunction = () => {
		return async function ({ update }) {
			await update();
		};
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex justify-center max-w-4xl mx-auto my-24">
	<div class="bg-surface-800 rounded-lg max-w-md w-full">
		<TabGroup justify="justify-center" padding="p-2">
			<Tab bind:group={tabSet} name="signup" value={0} class="w-1/2 !rounded-tr-none">
				<h4>Sign up</h4>
			</Tab>
			<Tab bind:group={tabSet} name="login" value={1} class="w-1/2 !rounded-tl-none">
				<h4>Log in</h4>
			</Tab>
			<svelte:fragment slot="panel">
				<section class="flex p-4 justify-center">
					{#if tabSet === 0}
						<form
							method="post"
							action="?/signup"
							class="flex flex-col gap-2 w-full"
							use:enhance={handleSignup}
						>
							<label for="email" class="label">
								<h5>Email</h5>
								<input
									id="email"
									name="email"
									type="email"
									class="input outline-none"
								/>
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
					{:else if tabSet == 1}
						<form
							method="post"
							action="?/login"
							class="flex flex-col gap-2 w-full"
							use:enhance={handleLogin}
						>
							<label for="email" class="label">
								<h5>Email</h5>
								<input
									id="email"
									name="email"
									type="email"
									class="input outline-none"
								/>
							</label>
							<label for="password" class="label">
								<h5>Password</h5>
								<input
									id="password"
									name="password"
									type="password"
									class="input outline-none"
								/>
							</label>
							<button type="submit" class="btn mt-2 variant-filled-secondary">
								Log in
							</button>
						</form>
					{/if}
				</section>
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
