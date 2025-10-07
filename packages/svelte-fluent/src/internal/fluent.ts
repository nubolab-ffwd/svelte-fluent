import type { FluentBundle, FluentVariable } from '@fluent/bundle';
import { createParser, type Parser as MarkupParser } from '#markup-parser';
import { mapBundleSync } from '@fluent/sequence';

type Options = {
	markupParser?: MarkupParser;
	onError?: (msg: string) => void;
};

export type SvelteFluent = {
	readonly bundles: FluentBundle[];
	readonly markupParser: MarkupParser;
	readonly onError?: (msg: string) => void;
	localize: (id: string, args?: Record<string, FluentVariable>) => string;
};

export function createSvelteFluent(bundles: FluentBundle[], options: Options = {}): SvelteFluent {
	const fluent: SvelteFluent = {
		bundles,
		onError: options.onError,
		markupParser: options.markupParser ?? createParser(),
		localize: (id, args) => {
			return getTranslation(fluent, id, args, false).value;
		}
	};
	return fluent;
}

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
		fluent.onError?.(`Localization missing: "${id}"`);
		return { value: id, attributes: {} };
	}
	const msg = bundle.getMessage(msgId);
	if (!msg) {
		fluent.onError?.(`Localization missing: "${id}"`);
		return { value: id, attributes: {} };
	}
	const pattern = attrId ? msg.attributes[attrId] : msg.value;
	if (attrId && pattern === null) {
		fluent.onError?.(`Localization missing: "${id}"`);
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
		fluent.onError?.(`Localization error in "${id}": ${err}`);
	}
	return { value, attributes };
}
