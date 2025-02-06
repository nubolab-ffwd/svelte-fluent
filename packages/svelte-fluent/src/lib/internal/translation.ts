import type { FluentVariable } from '@fluent/bundle';
import { mapBundleSync } from '@fluent/sequence';
import type { SvelteFluent } from './fluent.js';

export type Translation = {
	value: string;
	attributes: Record<string, string>;
};

export function getTranslation(
	fluent: SvelteFluent,
	id: string,
	args?: Record<string, FluentVariable>,
	formatAttributes = true
): Translation {
	const [msgId, attrId] = id.split('.', 2);
	const bundle = mapBundleSync(fluent.bundles, msgId);
	if (bundle === null) {
		fluent.options.onError?.(`Localization missing: "${id}"`);
		return { value: id, attributes: {} };
	}
	const msg = bundle.getMessage(msgId);
	if (!msg) {
		fluent.options.onError?.(`Localization missing: "${id}"`);
		return { value: id, attributes: {} };
	}
	const pattern = attrId ? msg.attributes[attrId] : msg.value;
	if (attrId && pattern === null) {
		fluent.options.onError?.(`Localization missing: "${id}"`);
		return { value: id, attributes: {} };
	}
	const errors: Error[] = [];
	const value = pattern ? bundle.formatPattern(pattern, args, errors) : '';
	const attributes =
		formatAttributes && !attrId
			? Object.fromEntries(
					Object.entries(msg.attributes || {}).map(([name, pattern]) => [
						name,
						bundle.formatPattern(pattern, args, errors)
					])
				)
			: {};
	for (const err of errors) {
		fluent.options.onError?.(`Localization error in "${id}": ${err}`);
	}
	return { value, attributes };
}
