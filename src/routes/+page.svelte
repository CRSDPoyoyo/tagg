<svelte:head>
	<title>Tagg</title>
</svelte:head>

<div>
	<header>
		<div class="section-container">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-start space-y-4">
					<h1 class="text-6xl max-w-[600px]">Tagg</h1>
					<p class="text-xl max-w-[475px]">
						Tagg allows you to create and share timestamps of YouTube videos and
						livestreams.
					</p>
					<div class="flex gap-4">
						<a href="/tag" role="button" class="btn variant-filled-primary">
							<span>Get Started</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
</style>
