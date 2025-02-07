import { render, act, cleanup } from '@testing-library/svelte/svelte5';
import { describe, it, expect, afterEach } from 'vitest';
import { allExamples } from 'svelte-fluent-examples';

afterEach(async () => {
	await act();
	cleanup();
});

for (const example of allExamples) {
	describe(`Example ${example.name}`, () => {
		it('should render', async () => {
			const component = (await example.module()).default;
			const res = render(component);
			expect(res.container).toMatchSnapshot();
		});
	});
}
