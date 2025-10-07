import type { Component, Snippet } from 'svelte';

type Attrs = Record<string, string>;

/**
 * Represents a configuration for a standard HTML tag in a translation.
 */
export class TagElement {
	public readonly tag: string;
	public readonly attributes?: Record<string, string>;
	public readonly allowAttributes?: string[];

	/**
	 * @param tag The HTML tag to be rendered (e.g., 'a', 'strong').
	 * @param options Optional attributes to apply or allow on the element.
	 */
	constructor(
		tag: string,
		options: {
			attributes?: Record<string, string>;
			allowAttributes?: string[];
		} = {}
	) {
		this.tag = tag;
		this.attributes = options.attributes;
		this.allowAttributes = options.allowAttributes;
	}
}

type ComponentPropsConfig<P extends Record<string, unknown>> = P | ((attrs: Attrs) => P);

/**
 * Represents a configuration for a Svelte component in a translation.
 */
export class ComponentElement<P extends { children: Snippet }> {
	public readonly component: Component<P>;
	public readonly propsOrGetter: ComponentPropsConfig<Omit<P, 'children'>>;

	constructor(component: Component<P>, propsOrGetter: ComponentPropsConfig<Omit<P, 'children'>>) {
		this.component = component;
		this.propsOrGetter = propsOrGetter;
	}

	resolve(attrs: Attrs): [Component<P>, Omit<P, 'children'>] {
		const props =
			typeof this.propsOrGetter === 'function'
				? this.propsOrGetter(attrs)
				: (this.propsOrGetter ?? {});
		return [this.component, props];
	}
}
