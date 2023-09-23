<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types';

	let message: string;
	let value = '';
	$: disableSubmit = value === '';

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		const videoId = formData.get('video-id');
		if (value === '' || !videoId || videoId === '') {
			return cancel();
		}

		return async function ({ update, result }) {
			await update();

			if (result.type === 'failure') {
				message = 'Video not found';
			}
		};
	};
</script>

<svelte:head>
	<title>Tagg</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<div class="card">
		<header class="card-header"><h2>Search for a video</h2></header>
		<section class="p-4">
			<form method="post" class="flex flex-col space-y-4" use:enhance={handleSubmit}>
				<input
					type="text"
					name="video-id"
					class="input outline-none"
					bind:value
					autocomplete="off"
				/>
				<button class="btn variant-filled-primary w-min" disabled={disableSubmit}
					>Search</button
				>
				{#if message}
					<span>{message}</span>
				{/if}
			</form>
		</section>
	</div>
</div>
