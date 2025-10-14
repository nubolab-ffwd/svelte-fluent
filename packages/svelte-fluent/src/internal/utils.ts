import { LOCALIZABLE_ATTRIBUTES } from './definitions.js';

export const isLocalizableAttribute = (
	name: string,
	tag: string,
	explicitAllow?: string[]
): boolean => {
	const attrName = name.toLowerCase();
	return (
		explicitAllow?.includes(attrName) ||
		LOCALIZABLE_ATTRIBUTES[tag]?.includes(attrName) ||
		LOCALIZABLE_ATTRIBUTES.global.includes(attrName)
	);
};

export const filterLocalizableAttributes = (
	tag: string,
	attrs: Record<string, string>,
	explicitAllow?: string[]
): Record<string, string> =>
	Object.fromEntries(
		Object.entries(attrs).filter(([name]) => isLocalizableAttribute(name, tag, explicitAllow))
	);
