import * as svelteInternal from 'svelte/internal';
import { vi, beforeEach, afterEach, beforeAll } from 'vitest';

beforeAll(() => {
	// workaround for vitest issue https://github.com/vitest-dev/vitest/issues/2834
	vi.mock('svelte', () => svelteInternal);
});

beforeEach(() => {
	vi.useFakeTimers();
	vi.setSystemTime(new Date(2022, 8, 13));
});

afterEach(() => {
	vi.useRealTimers();
});
