import { describe, it, expect, vi } from 'vitest';
import { render } from 'svelte/server';
import { allExamples } from 'svelte-fluent-examples';

vi.stubGlobal('navigator', { languages: [] });

for (const example of allExamples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = (await example.module()).default;
			const res = render(component, { props: {}, context: new Map() });
			expect(res).toMatchSnapshot();
		});
	});
}
