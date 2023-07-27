<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-scren h-screen justify-center items-center bg-surface-900">
	<div class="flex flex-col justify-center items-center text-start">
		<h1 class="h1">Tagg</h1>
		<p>Your all-in-one YourTube tagger and timestamper</p>
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
		/>
		<button type="button" class="btn variant-ringed-primary mt-5">
			<span><Icon icon="pajamas:discord" color="white" /></span>
			<span>Connect with Discord</span>
		</button>
	</div>
</div>
