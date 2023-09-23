import type { User } from '@supabase/supabase-js';
import { getContext, setContext } from 'svelte';
import { writable, type Readable, readable } from 'svelte/store';

const USER_STORE_KEY = 'UserStore';

export function getUserStore(options: { readonly: false }): UserStore;
export function getUserStore(options: { readonly: true }): UserStoreRO;
export function getUserStore(options?: { readonly: boolean }): UserStore | UserStoreRO {
	const userStore = getContext<UserStore | undefined>(USER_STORE_KEY);

	if (!userStore) {
		throw new Error(
			'userStore is not initialized. Please ensure that `initializeUserContext()` is called.'
		);
	}

	if (options?.readonly) return readable(userStore);
	return userStore;
}

export function initializeUserContext(user?: User) {
	const modalStore = userService(user);

	return setContext(USER_STORE_KEY, modalStore);
}

export type UserStore = ReturnType<typeof userService>;
export type UserStoreRO = Readable<UserStore>;

function userService(user?: User) {
	const { subscribe, set, update } = writable<User | undefined>(user);
	return {
		subscribe,
		set,
		update
	};
}
