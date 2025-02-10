import { render, act, cleanup } from '@testing-library/svelte/svelte5';
import { describe, it, expect, afterEach } from 'vitest';
import { allExamples } from 'svelte-fluent-examples';
import type { ComponentModule } from '../utils';

afterEach(async () => {
	await act();
	cleanup();
});

for (const example of allExamples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = ((await example.module()) as ComponentModule).default;
			const res = render(component);
			expect(res.container).toMatchSnapshot();
		});
	});
}
