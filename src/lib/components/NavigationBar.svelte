<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Bookmark from '$components/svg/Bookmark.svelte';
	import type { GoTrueClient, User } from '@supabase/supabase-js';

	export let user: User | undefined = undefined;
	export let auth: GoTrueClient;

	async function handleLogout() {
		await auth.signOut();
	}
</script>

<AppBar padding="py-4 px-8">
	<svelte:fragment slot="lead">
		<Bookmark height={36} width={36} />
	</svelte:fragment>

	<a href="/"><h1>Tagg</h1></a>

	<svelte:fragment slot="trail">
		{#if user}
			<button class="btn variant-ringed-primary" on:click={handleLogout}>
				<span>Logout</span>
			</button>
		{:else}
			<a href="/login">
				<button class="btn variant-ringed-primary">
					<span>Login</span>
				</button>
			</a>
		{/if}
		<div class="placeholder-circle w-12" />
	</svelte:fragment>
</AppBar>
