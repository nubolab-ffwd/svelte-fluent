import { vi, beforeEach, afterEach } from 'vitest';

beforeEach(() => {
	vi.useFakeTimers();
	vi.setSystemTime(new Date(2022, 8, 13));
});

afterEach(() => {
	vi.useRealTimers();
});
