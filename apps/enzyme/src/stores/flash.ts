import { writable } from 'svelte/store';

type Flash = {
	message: string;
	code: 'success' | 'error' | 'warning' | 'info' | '';
};

const idleFlash: Flash = {
	message: '',
	code: ''
};

export const flashStore = writable<Flash>(idleFlash);

export const setFlash = (flash: Flash) => {
	flashStore.set(flash);
	setTimeout(() => {
		flashStore.set(idleFlash);
	}, 2000);
};
