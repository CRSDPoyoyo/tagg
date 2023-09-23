import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals, url }) => {
		const form = await request.formData();

		const email = form.get('email');
		const passwords = form.getAll('password');
		const password = passwords.at(0);

		if (passwords.length !== 2) return fail(400);
		if (password !== passwords.at(1)) return fail(400);

		if (typeof email !== 'string' || typeof password !== 'string') {
			return fail(400);
		}

		const { error } = await locals.supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${url.origin}/auth/callback`
			}
		});

		if (error) {
			console.log(error);
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		return {
			message: 'Please check your email for a magic link to log into the website.',
			success: true
		};
	},
	login: async ({ request, locals }) => {
		const form = await request.formData();

		const email = form.get('email');
		const password = form.get('password');

		if (typeof email !== 'string' || typeof password !== 'string') {
			return fail(400, { message: 'invalid info' });
		}

		const { error: signInError } = await locals.supabase.auth.signInWithPassword({
			email,
			password
		});

		if (signInError) {
			return fail(400, { message: signInError.message });
		}

		throw redirect(301, '/');
	}
};
