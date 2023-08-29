<script>
	import '../app.postcss';

	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import NavigationBar from '$components/NavigationBar.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
</script>

<AppShell slotHeader="bg-surface-800">
	<svelte:fragment slot="header">
		<NavigationBar />
	</svelte:fragment>

	<slot />
</AppShell>
