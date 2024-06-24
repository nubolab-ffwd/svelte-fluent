import { describe, it, expect, vi } from 'vitest';
import { render } from 'svelte/server';

vi.stubGlobal('navigator', { languages: [] });

const exampleComponents = import.meta.glob('$site/examples/**/App.svelte');

export const examples = Object.entries(exampleComponents).map(([name, mod]) => ({
	name: name.replace('/src/site/examples/', ''),
	module: mod
}));

for (const example of examples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = (await example.module()).default;
			const res = render(component, { props: {}, context: new Map() });
			expect(res).toMatchSnapshot();
		});
	});
}
