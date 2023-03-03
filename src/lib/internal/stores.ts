import type { FluentBundle, FluentVariable } from '@fluent/bundle';
import { mapBundleSync } from '@fluent/sequence';
import { getContext, setContext } from 'svelte';
import { derived, type Readable } from 'svelte/store';

const CONTEXT_KEY = {};

export type Translation = {
	value: string;
	attributes: Record<string, string>;
};

type Stores = {
	getTranslation: Readable<(id: string, args?: Record<string, FluentVariable>) => Translation>;
	localize: Readable<(id: string, args?: Record<string, FluentVariable>) => string>;
};

export function initStores(
	bundles: Readable<Iterable<FluentBundle>>,
	onError: (msg: string) => void
): Stores {
	const getTranslation = derived(
		bundles,
		($bundles) =>
			(id: string, args?: Record<string, FluentVariable>): Translation => {
				const bundle = mapBundleSync($bundles, id);
				if (bundle === null) {
					onError(`[svelte-fluent] Localization missing: "${id}"`);
					return { value: id, attributes: {} };
				}
				const msg = bundle.getMessage(id);
				if (!msg) {
					onError(`[svelte-fluent] Localization missing: "${id}"`);
					return { value: id, attributes: {} };
				}
				const errors: Error[] = [];
				const value = msg.value ? bundle.formatPattern(msg.value, args, errors) : '';
				const attributes = Object.fromEntries(
					Object.entries(msg.attributes || {}).map(([name, pattern]) => [
						name,
						bundle.formatPattern(pattern, args, errors)
					])
				);
				for (const err of errors) {
					onError(`[svelte-fluent] Localization error: ${err}`);
				}
				return { value, attributes };
			}
	);
	const localize = derived(
		bundles,
		($bundles) =>
			(id: string, args?: Record<string, FluentVariable>): string => {
				const [msgId, attrId] = id.split('.', 2);
				const bundle = mapBundleSync($bundles, msgId);
				if (bundle === null) {
					onError(`[svelte-fluent] Localization missing: "${id}"`);
					return id;
				}
				const msg = bundle.getMessage(msgId);
				if (!msg) {
					onError(`[svelte-fluent] Localization missing: "${id}"`);
					return id;
				}
				const pattern = attrId ? msg.attributes[attrId] : msg.value;
				if (pattern === null) {
					onError(`[svelte-fluent] Localization missing: "${id}"`);
					return id;
				}
				const errors: Error[] = [];
				const formatted = bundle.formatPattern(pattern, args, errors);
				for (const err of errors) {
					onError(`[svelte-fluent] Localization error: ${err}`);
				}
				return formatted;
			}
	);
	const stores = { getTranslation, localize };
	return setContext(CONTEXT_KEY, stores);
}

export function getStores() {
	const stores = getContext<Stores>(CONTEXT_KEY);
	if (!stores) {
		throw new Error('[svelte-fluent] <FluentProvider/> was not found in component hierarchy.');
	}
	return stores;
}

export const getTranslation: Stores['getTranslation'] = {
	subscribe(fn) {
		return getStores().getTranslation.subscribe(fn);
	}
};

export const localize: Stores['localize'] = {
	subscribe(fn) {
		return getStores().localize.subscribe(fn);
	}
};
