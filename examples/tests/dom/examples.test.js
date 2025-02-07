import { render, act, cleanup } from '@testing-library/svelte/svelte5';
import { describe, it, expect, afterEach } from 'vitest';

afterEach(async () => {
	await act();
	cleanup();
});

const exampleComponents = import.meta.glob('../../src/**/App.svelte');

export const examples = Object.entries(exampleComponents).map(([name, mod]) => ({
	name: name.replace('../../src/', ''),
	module: mod
}));

for (const example of examples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = (await example.module()).default;
			const res = render(component);
			expect(res.container).toMatchSnapshot();
		});
	});
}
