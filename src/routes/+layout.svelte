<script>
	import '../app.postcss';

	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import NavigationBar from '$components/NavigationBar.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { initializeUserContext } from '$lib/contexts/UserContext';

	initializeUserContext(data.session?.user);
</script>

<AppShell slotHeader="bg-surface-800">
	<svelte:fragment slot="header">
		<NavigationBar auth={supabase.auth} user={data.session?.user} />
	</svelte:fragment>

	<slot />
</AppShell>
