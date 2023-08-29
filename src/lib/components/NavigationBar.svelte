<script lang="ts">
	import Icon from '@iconify/svelte';
	import { AppBar, popup, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	let comboboxValue: string;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background="bg-transparent"
>
	<svelte:fragment slot="lead">
		<button class="btn variant-ringed-primary" use:popup={popupCombobox}>
			<Icon icon="ic:baseline-menu" color="white" width="32" height="32" />
		</button>

		<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
			<ListBox rounded="rounded-none">
				<ListBoxItem bind:group={comboboxValue} name="medium" value="Menu item one">
					Menu item one
				</ListBoxItem>
				<ListBoxItem bind:group={comboboxValue} name="medium" value="Menu item twos">
					Menu item two
				</ListBoxItem>
				<ListBoxItem bind:group={comboboxValue} name="medium" value="Menu item three">
					Menu item three
				</ListBoxItem>
			</ListBox>
			<div class="arrow bg-surface-100-800-token" />
		</div>
	</svelte:fragment>

	<a href="/"><h1 class="h1">Tagg</h1></a>

	<svelte:fragment slot="trail">
		<a href="/login">
			<button type="button" class="btn variant-ringed-primary">
				<span>Login</span>
			</button>
		</a>
	</svelte:fragment>
</AppBar>
