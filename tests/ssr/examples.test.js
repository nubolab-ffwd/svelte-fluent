import { describe, it, expect, vi } from 'vitest';

vi.stubGlobal('navigator', { languages: [] });

const exampleComponents = import.meta.glob('$lib/site/examples/**/App.svelte');

export const examples = Object.entries(exampleComponents).map(([name, mod]) => ({
	name: name.replace('/src/lib/site/examples/', ''),
	module: mod
}));

for (const example of examples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = (await example.module()).default;
			const res = component.render();
			expect(res).toMatchSnapshot();
		});
	});
}
