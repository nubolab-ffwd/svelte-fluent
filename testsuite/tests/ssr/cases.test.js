import { describe, it, expect, vi } from 'vitest';
import { render } from 'svelte/server';

vi.stubGlobal('navigator', { languages: [] });

const testComponents = import.meta.glob('../cases/**/Test.svelte');

export const tests = Object.entries(testComponents).map(([name, mod]) => ({
	name: name.replace('../cases/', ''),
	module: mod
}));

for (const test of tests) {
	describe(`Case ${test.name}`, () => {
		it('should render', async () => {
			const component = (await test.module()).default;
			const res = render(component, { props: {}, context: new Map() });
			expect(res).toMatchSnapshot();
		});
	});
}
