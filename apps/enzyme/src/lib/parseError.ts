import type { ZodFormattedError } from 'zod';

export const parseError = <T>(name: string, error: ZodFormattedError<T>) => {
	// @ts-ignore
	return error[name]?._errors[0] ?? '';
};
