<script lang="ts">
	import { enhance } from '$app/forms';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	let tabSet = 0;
</script>

<div class="flex justify-center max-w-4xl mx-auto my-24">
	<div class="bg-surface-800 rounded-lg max-w-md w-full">
		<TabGroup justify="justify-center" padding="p-4">
			<Tab bind:group={tabSet} name="signup" value={0} class="w-1/2 !rounded-tr-none">
				<h3 class="h3">Sign up</h3>
			</Tab>
			<Tab bind:group={tabSet} name="login" value={1} class="w-1/2 !rounded-tl-none">
				<h3 class="h3">Log in</h3>
			</Tab>
			<svelte:fragment slot="panel">
				<section class="flex p-4 justify-center">
					{#if tabSet === 0}
						<form
							method="post"
							action="?/signup"
							use:enhance
							class="flex flex-col gap-2"
						>
							<label for="email" class="label">
								<h5>Email</h5>
								<input
									id="email"
									type="email"
									class="input variant-form-material outline-none"
								/>
							</label>
							<label for="password" class="label">
								<h5>Password</h5>
								<input
									id="password"
									type="password"
									class="input variant-form-material outline-none"
								/>
							</label>
							<label for="confirm-password" class="label">
								<h5>Confirm Password</h5>
								<input
									id="confirm-password"
									type="password"
									class="input variant-form-material outline-none"
								/>
							</label>
							<button type="submit" class="btn mt-2 variant-filled-secondary">
								Sign up
							</button>
						</form>
					{:else if tabSet == 1}
						<form
							method="post"
							action="?/login"
							use:enhance
							class="flex flex-col gap-2"
						>
							<label for="email" class="label">
								<h5>Email</h5>
								<input
									id="email"
									type="email"
									class="input variant-form-material outline-none"
								/>
							</label>
							<label for="password" class="label">
								<h5>Password</h5>
								<input
									id="password"
									type="password"
									class="input variant-form-material outline-none"
								/>
							</label>
							<button type="submit" class="btn mt-2 variant-filled-secondary">
								Log in
							</button>
						</form>
					{/if}
				</section>
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
