import { describe, it, expect, vi } from 'vitest';
import { allExamples } from 'svelte-fluent-examples';
import type { ComponentModule } from '../utils';
import { renderSync } from './render';

vi.stubGlobal('navigator', { languages: [] });

for (const example of allExamples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = ((await example.module()) as ComponentModule).default;
			const res = renderSync(component, { props: {}, context: new Map() });
			expect(res).toMatchSnapshot();
		});
	});
}
