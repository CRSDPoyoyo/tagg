import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { checkIfVideoExists } from '$lib/utils/youtube';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const videoId = form.get('video-id');
		if (videoId === null || typeof videoId !== 'string') {
			return fail(400);
		}

		const result = await checkIfVideoExists(videoId);
		if (!result) {
			return fail(404);
		}

		throw redirect(303, `/tag/${videoId}`);
	}
};
