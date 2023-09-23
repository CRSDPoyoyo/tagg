<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types';

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
	<div class="card max-w-md w-full">
		<header class="card-header">
			<h2>Login</h2>
		</header>
		<section>
			<form method="post" class="flex flex-col gap-2 w-full p-4" use:enhance={handleLogin}>
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
					/>
				</label>
				<button type="submit" class="btn mt-2 variant-filled-secondary"> Log in </button>
			</form>
		</section>
	</div>
</div>
