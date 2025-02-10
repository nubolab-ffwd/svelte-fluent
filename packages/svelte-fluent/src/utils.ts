import type { ObjectHook } from 'rollup';

export type Satisfy<base, t extends base> = t;

export type HookFunction<H extends ObjectHook<unknown>> = H extends ObjectHook<infer F> ? F : never;
