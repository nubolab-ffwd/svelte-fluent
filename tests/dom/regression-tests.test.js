import { render, act, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach } from 'vitest';

afterEach(async () => {
	await act();
	cleanup();
});

const testComponents = import.meta.glob('../../src/regression-tests/**/Test.svelte');

export const tests = Object.entries(testComponents).map(([name, mod]) => ({
	name: name.replace('../../src/regression-tests/', ''),
	module: mod
}));

for (const test of tests) {
	describe(`Regression test ${test.name}`, () => {
		it('should render', async () => {
			const component = (await test.module()).default;
			const res = render(component);
			expect(res.container).toMatchSnapshot();
		});
	});
}
