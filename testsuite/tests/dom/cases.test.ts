import { render, act, cleanup } from '@testing-library/svelte/svelte5';
import { describe, it, expect, afterEach } from 'vitest';
import type { ComponentModule } from '../utils';

afterEach(async () => {
	await act();
	cleanup();
});

const testComponents = import.meta.glob('../cases/**/Test.svelte');

export const tests = Object.entries(testComponents).map(([name, mod]) => ({
	name: name.replace('../cases/', ''),
	module: mod
}));

for (const test of tests) {
	describe(`Case test ${test.name}`, () => {
		it('should render', async () => {
			const component = ((await test.module()) as ComponentModule).default;
			const res = render(component);
			expect(res.container).toMatchSnapshot();
		});
	});
}
