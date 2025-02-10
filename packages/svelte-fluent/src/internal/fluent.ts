import type { FluentBundle, FluentVariable } from '@fluent/bundle';
import { getTranslation } from './translation.js';

type Options = {
	onError?: (msg: string) => void;
};

export type SvelteFluent = {
	readonly bundles: FluentBundle[];
	readonly options: Options;
	localize(id: string, args?: Record<string, FluentVariable>): string;
};

export function createSvelteFluent(bundles: FluentBundle[], options: Options = {}): SvelteFluent {
	return {
		bundles,
		options,
		localize(id, args) {
			return getTranslation(this, id, args, false).value;
		}
	};
}
