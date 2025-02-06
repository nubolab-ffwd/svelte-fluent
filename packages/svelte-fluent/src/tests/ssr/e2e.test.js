import { describe, it, expect, vi } from 'vitest';
import { render } from 'svelte/server';

vi.stubGlobal('navigator', { languages: [] });

const testComponents = import.meta.glob('../../e2e/**/Test.svelte');

export const tests = Object.entries(testComponents).map(([name, mod]) => ({
	name: name.replace('../../e2e/', ''),
	module: mod
}));

for (const test of tests) {
	describe(`E2E test ${test.name}`, () => {
		it('should render', async () => {
			const component = (await test.module()).default;
			const res = render(component, { props: {}, context: new Map() });
			expect(res).toMatchSnapshot();
		});
	});
}
