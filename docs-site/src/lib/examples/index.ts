const exampleComponents = import.meta.glob('./**/App.svelte');

export const allExamples = Object.entries(exampleComponents).map(([name, mod]) => ({
	name: name.replace(/^\.\//, ''),
	module: mod
}));
