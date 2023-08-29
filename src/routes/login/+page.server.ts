import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const email = form.get('email');
		const password = form.get('password');

		console.log(email, password);

		return {};
	}
};
