import { verifySession } from '@lib/verifySession';

export async function load() {
	await verifySession();
}
export const ssr = false;
