<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tag | Tagg</title>
</svelte:head>

<span>Video ID: {data.id}</span>
