const examples = import.meta.glob('./**/*.svelte');
const exampleSources = import.meta.glob('./**/*.{svelte,js,ts,ftl}', { as: 'raw', eager: true });

export function loadExample(name: string) {
	return examples[`./${name}`]();
}

export function loadExampleSource(name: string) {
	return exampleSources[`./${name}`];
}
