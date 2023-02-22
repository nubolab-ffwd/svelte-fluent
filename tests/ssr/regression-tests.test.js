import { describe, it, expect, vi } from 'vitest';

vi.stubGlobal('navigator', { languages: [] });

const testComponents = import.meta.glob('../../src/regression-tests/**/Test.svelte');

export const tests = Object.entries(testComponents).map(([name, mod]) => ({
	name: name.replace('../../src/regression-tests/', ''),
	module: mod
}));

for (const test of tests) {
	describe(`Regression test ${test.name}`, () => {
		it('should render', async () => {
			const component = (await test.module()).default;
			const res = component.render();
			expect(res).toMatchSnapshot();
		});
	});
}
