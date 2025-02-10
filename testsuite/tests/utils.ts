import type { Component } from 'svelte';

export type ComponentModule<C extends Component = Component> = {
	default: C;
};
