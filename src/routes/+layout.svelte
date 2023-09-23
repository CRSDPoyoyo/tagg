<script lang="ts">
	import '../app.postcss';

	import { AppShell, prefersReducedMotionStore } from '@skeletonlabs/skeleton';

	import NavigationBar from '$components/NavigationBar.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { initializeUserContext } from '$lib/contexts/UserContext';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => {
			data.subscription.unsubscribe();
		};
	});

	initializeUserContext(data.session?.user);

	$: allyPageSmoothScroll = !$prefersReducedMotionStore ? 'scroll-smooth' : '';
</script>

<AppShell slotHeader="bg-surface-800" regionPage={allyPageSmoothScroll}>
	<svelte:fragment slot="header">
		<NavigationBar auth={supabase.auth} user={data.session?.user} />
	</svelte:fragment>

	<slot />
</AppShell>
