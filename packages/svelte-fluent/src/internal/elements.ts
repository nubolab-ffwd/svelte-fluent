import type { Component, Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

type Attrs = Record<string, string>;
type TagOptions = { allowAttributes?: string[] };

/**
 * Represents a configuration for a standard HTML tag in a translation.
 */
export class TagElement<TagName extends keyof SvelteHTMLElements & string> {
	public readonly tag: TagName;
	public readonly attributes?: SvelteHTMLElements[TagName];
	public readonly allowAttributes?: string[];

	/**
	 * @param tag The HTML tag to be rendered (e.g., 'a', 'strong').
	 * @param attributes The attributes for the rendered tag.
	 * @param options Optional configuration.
	 */
	constructor(tag: TagName, attributes?: SvelteHTMLElements[TagName], options?: TagOptions) {
		this.tag = tag;
		this.attributes = attributes;
		this.allowAttributes = options?.allowAttributes;
	}
}

type ComponentPropsConfig<P extends Record<string, unknown>> = P | ((attrs: Attrs) => P);

/**
 * Represents a configuration for a Svelte component in a translation.
 */
export class ComponentElement<P extends { children?: Snippet }> {
	public readonly component: Component<P>;
	public readonly propsOrGetter: ComponentPropsConfig<Omit<P, 'children'>>;

	constructor(
		component: Component<P>,
		// The conditional rest parameter ensures the constructor signature is
		// dynamically required or optional based on the component's props.
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		...[propsOrGetter]: {} extends Omit<P, 'children'>
			? [propsOrGetter?: ComponentPropsConfig<Omit<P, 'children'>>]
			: [propsOrGetter: ComponentPropsConfig<Omit<P, 'children'>>]
	) {
		this.component = component;
		// A type assertion is safe here because the constructor's signature
		// has already guaranteed that propsOrGetter is provided when necessary.
		this.propsOrGetter = (propsOrGetter ?? {}) as ComponentPropsConfig<Omit<P, 'children'>>;
	}

	resolve(attrs: Attrs): [Component<P>, Omit<P, 'children'>] {
		const props =
			typeof this.propsOrGetter === 'function' ? this.propsOrGetter(attrs) : this.propsOrGetter;
		return [this.component, props];
	}
}
