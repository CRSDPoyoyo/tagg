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
		<a href="/"><Bookmark height={36} width={36} /></a>
	</svelte:fragment>

	<h2 class="select-none">Tagg</h2>

	<svelte:fragment slot="trail">
		{#if user}
			<button class="btn variant-filled-error" on:click={handleLogout}>
				<span>Logout</span>
			</button>
			<div class="placeholder-circle w-10" />
		{:else}
			<a href="/register">
				<button class="btn variant-filled-primary">
					<span>Sign up</span>
				</button>
			</a>
			<a href="/login">
				<button class="btn variant-filled-primary">
					<span>Login</span>
				</button>
			</a>
		{/if}
	</svelte:fragment>
</AppBar>
