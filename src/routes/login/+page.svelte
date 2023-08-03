<script lang="ts">
	import NavigationBar from '$lib/NavigationBar.svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

	let tabSet = 0;
</script>

<div class="h-screen bg-surface-900">
	<NavigationBar />
	<div class="flex h-full items-center justify-center">
		<div class="bg-surface-800 w-1/4 h-1/3 rounded-2xl">
			<TabGroup justify="justify-center" padding="p-4">
				<Tab bind:group={tabSet} name="signup" value={0} class="w-1/2 "
					><h3 class="h3">Sign up</h3></Tab
				>
				<Tab bind:group={tabSet} name="login" value={1} class="w-1/2"
					><h3 class="h3">Log in</h3></Tab
				>
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<label class="label p-4 flex flex-col">
							<div>
								<span class="h5">Email</span>
								<input
									class="input variant-form-material variant-outline-primary focus:outline-none"
								/>
							</div>
							<div>
								<span class="h5">Password</span>
								<input
									class="input variant-form-material variant-outline-primary focus:outline-none"
								/>
							</div>
							<div>
								<span class="h5">Confirm Password</span>
								<input
									class="input variant-form-material variant-outline-primary focus:outline-none"
								/>
							</div>
							<button class="variant-filled-secondary">Sign up</button>
						</label>
					{:else if tabSet == 1}
						<label class="label p-4 flex flex-col">
							<span class="h5">Email</span>
							<input
								class="input variant-form-material variant-outline-primary focus:outline-none"
							/>
							<span class="h5">Password</span>
							<input
								class="input variant-form-material variant-outline-primary focus:outline-none"
							/>
							<button class="variant-filled-secondary">Log in</button>
						</label>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
