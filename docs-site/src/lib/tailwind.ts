/**
 * Identity string tag function that marks the string for tailwind tooling
 */
export const tw = (strings: readonly string[] | ArrayLike<string>, ...values: unknown[]) =>
	String.raw({ raw: strings }, ...values);
