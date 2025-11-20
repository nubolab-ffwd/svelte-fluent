# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-next.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.5...svelte-fluent-v2.0.0-next.1) (2025-11-20)


### ⚠ BREAKING CHANGES

* **deps:** drop jsdom versions < 25.0.0 from peer dependencies
* rename `initFluentContext` to `setSvelteFluent`
* remove `FluentContext` type and `getFluentContext` from public api
* remove deprecated `FluentProvider` component
* remove deprecated legacy `Localized` and `Overlay` components
* Localized component interface changed and the Overlay component was dropped

### Features

* add `useLocalized` and `useSvelteFluent` runes ([11666ef](https://github.com/nubolab-ffwd/svelte-fluent/commit/11666ef37a6d1f8576061b449ed48ac4f3c61952))
* new unified Localize component ([854b4f0](https://github.com/nubolab-ffwd/svelte-fluent/commit/854b4f0f23f7de97bf1139e9953a99d73263ac35))


### Miscellaneous Chores

* **deps:** drop jsdom versions &lt; 25.0.0 from peer dependencies ([f83aedb](https://github.com/nubolab-ffwd/svelte-fluent/commit/f83aedba49e1cea0133d95f95eefe4dda6868e97))
* release as 2.0.0-next.1 ([f3b28ed](https://github.com/nubolab-ffwd/svelte-fluent/commit/f3b28eda35c5f55702674dc8033f04814488de89))
* remove `FluentContext` type and `getFluentContext` from public api ([fd718ae](https://github.com/nubolab-ffwd/svelte-fluent/commit/fd718aec038b20eecb42b0693db4a1990aca4b40))
* remove deprecated `FluentProvider` component ([30d3b9d](https://github.com/nubolab-ffwd/svelte-fluent/commit/30d3b9d1a2d8c11a5d45441a3ff335400dae7f10))
* remove deprecated legacy `Localized` and `Overlay` components ([d3ba54a](https://github.com/nubolab-ffwd/svelte-fluent/commit/d3ba54a5751056ebebba5ae7ea75bc439fa383e7))
* rename `initFluentContext` to `setSvelteFluent` ([b3871aa](https://github.com/nubolab-ffwd/svelte-fluent/commit/b3871aa8c64eaeee93257303542b5782ed309f6b))

## [1.0.5](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.4...svelte-fluent-v1.0.5) (2025-09-30)


### Bug Fixes

* disable overlay SSR handling for svelte versions with incompatible internal api ([760cc81](https://github.com/nubolab-ffwd/svelte-fluent/commit/760cc81ff91b9e43991d45f00e291e662e5e50f0))

## [1.0.4](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.3...svelte-fluent-v1.0.4) (2025-08-05)


### Bug Fixes

* another case where svelte payload arrays weren't handled correctly ([7c3457d](https://github.com/nubolab-ffwd/svelte-fluent/commit/7c3457d14811220fd0098287d8559e75d57f8de4))
* compatibility with svelte &gt;= v5.36.8 ([1b2644b](https://github.com/nubolab-ffwd/svelte-fluent/commit/1b2644b11e7d7bc1804e305585e81bc29fd794ab))

## [1.0.3](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.2...svelte-fluent-v1.0.3) (2024-12-06)


### Bug Fixes

* prevent hydration error for overlays in elements not allowing `&lt;div&gt;` children ([06b7b57](https://github.com/nubolab-ffwd/svelte-fluent/commit/06b7b57761403db0c8b1b015104d6040b95426e6))

## [1.0.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.1...svelte-fluent-v1.0.2) (2024-12-02)


### Bug Fixes

* **package:** add return type to vite plugin to fix type generation ([c3c30c6](https://github.com/nubolab-ffwd/svelte-fluent/commit/c3c30c620ef129e745273db863b1c36c34cacb83))

## [1.0.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.0...svelte-fluent-v1.0.1) (2024-12-02)


### Bug Fixes

* prevent svelte hydration error when using Overlay and message contains markup ([795c66b](https://github.com/nubolab-ffwd/svelte-fluent/commit/795c66bf8367bbf677787165886e3de8254efb00))

## [1.0.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.8.1...svelte-fluent-v1.0.0) (2024-10-28)


### ⚠ BREAKING CHANGES

* the `$localized` store was removed
* the import path of the bundler plugin changed
* svelte version 5 is now required

### Features

* add helpful error message if the bundler plugin detects that jsdom is missing in dependencies ([c0daaeb](https://github.com/nubolab-ffwd/svelte-fluent/commit/c0daaeb653296898d8927f3d147bb07f3fbe2179))
* integrate `.ftl` loading into bundler plugin ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))
* server-side translation api ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))
* svelte 5 support ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))


### Bug Fixes

* **deps:** update dependency @fluent/dom to ^0.10.0 ([34e5126](https://github.com/nubolab-ffwd/svelte-fluent/commit/34e5126e90ea9f955f225037a377862b8a6f51d2))


### Miscellaneous Chores

* release as 1.0.0 ([66036e3](https://github.com/nubolab-ffwd/svelte-fluent/commit/66036e3d41b0719c1a5359c85b2166385adb014c))


### Code Refactoring

* remove localized store ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))

## [1.0.0-next.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v1.0.0-next.1...svelte-fluent-v1.0.0-next.2) (2024-08-23)


### Features

* add helpful error message if the bundler plugin detects that jsdom is missing in dependencies ([c0daaeb](https://github.com/nubolab-ffwd/svelte-fluent/commit/c0daaeb653296898d8927f3d147bb07f3fbe2179))


### Bug Fixes

* **deps:** update dependency @fluent/dom to ^0.10.0 ([34e5126](https://github.com/nubolab-ffwd/svelte-fluent/commit/34e5126e90ea9f955f225037a377862b8a6f51d2))


### Miscellaneous Chores

* release as 1.0.0-next.2 ([f8310d5](https://github.com/nubolab-ffwd/svelte-fluent/commit/f8310d5174b61fe3773a69aa5828105c43a5aa34))

## [1.0.0-next.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.8.0...svelte-fluent-v1.0.0-next.1) (2024-06-25)


### ⚠ BREAKING CHANGES

* the `$localized` store was removed
* the import path of the bundler plugin changed
* svelte version 5 is now required

### Features

* integrate `.ftl` loading into bundler plugin ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))
* server-side translation api ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))
* svelte 5 support ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))


### Code Refactoring

* remove localized store ([052f72a](https://github.com/nubolab-ffwd/svelte-fluent/commit/052f72ac020c40bce9146a64bf23a48d03569667))

## [0.8.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.8.0...svelte-fluent-v0.8.1) (2024-08-22)


### Bug Fixes

* **deps:** update dependency @fluent/dom to ^0.10.0 ([34e5126](https://github.com/nubolab-ffwd/svelte-fluent/commit/34e5126e90ea9f955f225037a377862b8a6f51d2))

## [0.8.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.7.0...svelte-fluent-v0.8.0) (2024-02-23)


### ⚠ BREAKING CHANGES

* **deps:** drop jsdom <20 from peer dependencies

### Features

* **deps:** drop jsdom &lt;20 from peer dependencies ([554db59](https://github.com/nubolab-ffwd/svelte-fluent/commit/554db59b7af90a36335700981358ea418c8787b3))


### Bug Fixes

* **deps:** update dependency jsdom to v24 ([c5478ea](https://github.com/nubolab-ffwd/svelte-fluent/commit/c5478ea5119dd5a87c60fe6e41d98e6aa097e905))
* **deps:** update dependency jsdom to v24 ([c8d412a](https://github.com/nubolab-ffwd/svelte-fluent/commit/c8d412aed880147de88e1d03dddd01d0ca7c906a))

## [0.7.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.6.2...svelte-fluent-v0.7.0) (2023-07-17)


### Features

* add cjs build of rollup plugin for legacy rollup projects like sapper ([74b49e8](https://github.com/nubolab-ffwd/svelte-fluent/commit/74b49e83bb3e2b05c0a22c36b656b44abe404456))

## [0.6.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.6.1...svelte-fluent-v0.6.2) (2023-06-16)


### Bug Fixes

* prevent exception in svelte-devtools ([f3259d0](https://github.com/nubolab-ffwd/svelte-fluent/commit/f3259d0f5ce9bbc17fae4bc8c5a4678016cf2d8b))

## [0.6.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.6.0...svelte-fluent-v0.6.1) (2023-06-02)


### Bug Fixes

* **build:** reintroduce peer dependency on jsdom due to SSR errors when bundled in sveltekit apps ([02e094b](https://github.com/nubolab-ffwd/svelte-fluent/commit/02e094bbba8bfddad6b047fd3d989890861becea))

## [0.6.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.5.0...svelte-fluent-v0.6.0) (2023-03-07)


### Features

* new `localize` store for localizations in component scripts ([867e444](https://github.com/nubolab-ffwd/svelte-fluent/commit/867e4442f72de2f8e7bdf7f35291f8050bfc7272))


### Bug Fixes

* **packaging:** add `types` reference to package.json ([5cbfb1e](https://github.com/nubolab-ffwd/svelte-fluent/commit/5cbfb1ebf463d09b4d8f200588b59c2e95b331d2))

## [0.5.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/svelte-fluent-v0.4.3...svelte-fluent-v0.5.0) (2023-02-24)


### ⚠ BREAKING CHANGES

* ESM/UMD builds for usage outside of svelte applications are not generated any more
* wrapper element of `Overlay` component changed to `div`

### Features

* export typescript type definitions ([da86e4b](https://github.com/nubolab-ffwd/svelte-fluent/commit/da86e4b3cfdb90d424a0ab2379894b503134a13c))


### Bug Fixes

* **deps:** update dependency jsdom to v20.0.2 ([1b2a3f1](https://github.com/nubolab-ffwd/svelte-fluent/commit/1b2a3f148685314960ea1133b9a35dec74c360af))
* handle translations with empty pattern that define attributes ([7971653](https://github.com/nubolab-ffwd/svelte-fluent/commit/79716538cc7082f355dcb28e44a5812b1a6dc4d5)), closes [#695](https://github.com/nubolab-ffwd/svelte-fluent/issues/695)


### Code Refactoring

* wrapper element of `Overlay` component changed to `div` ([da86e4b](https://github.com/nubolab-ffwd/svelte-fluent/commit/da86e4b3cfdb90d424a0ab2379894b503134a13c))


### Build System

* use `@sveltejs/package` for publishing ([da86e4b](https://github.com/nubolab-ffwd/svelte-fluent/commit/da86e4b3cfdb90d424a0ab2379894b503134a13c))

### [0.4.3](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.4.2...v0.4.3) (2022-02-15)


### Bug Fixes

* **deps:** update dependency @fluent/dom to v0.8.1 ([ee9342b](https://github.com/nubolab-ffwd/svelte-fluent/commit/ee9342b60f76993df95c97a121531803172bb4f6))
* **rollup-plugin:** ensure `ssr` plugin option rewrites imports to SSR entry point ([d4aa9dc](https://github.com/nubolab-ffwd/svelte-fluent/commit/d4aa9dc9196896c13536802f02122c7ab4af2d2b))

### [0.4.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.4.1...v0.4.2) (2021-12-13)


### Features

* vite 2.7 plugin api compatibility ([1ef7266](https://github.com/nubolab-ffwd/svelte-fluent/commit/1ef7266f896038cb9aa66e94cecfd18de2935631))


### Bug Fixes

* **deps:** update dependency jsdom to v18.0.1 ([dd7be12](https://github.com/nubolab-ffwd/svelte-fluent/commit/dd7be12fca0ac3a9704cf3b0c7b40f15243d9f65))
* **deps:** update dependency jsdom to v18.1.0 ([ee50e23](https://github.com/nubolab-ffwd/svelte-fluent/commit/ee50e23575fcc7c9503f50b316e645c90ce34a49))
* **deps:** update dependency jsdom to v18.1.1 ([7454c16](https://github.com/nubolab-ffwd/svelte-fluent/commit/7454c165fa0f579f7aaa12e12433ac4112818d8b))

### [0.4.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.4.0...v0.4.1) (2021-09-15)

## [0.4.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.3.1...v0.4.0) (2021-07-14)


### ⚠ BREAKING CHANGES

* add bundler plugin for conditional SSR entrypint

### Features

* add bundler plugin for conditional SSR entrypint ([2f47cbc](https://github.com/nubolab-ffwd/svelte-fluent/commit/2f47cbcc63da82b5a1b284c106e5fdd8fc74a5b5))

### [0.3.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.3.0...v0.3.1) (2021-05-31)

## [0.3.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.2.1...v0.3.0) (2021-05-31)


### Features

* add support for Vite / SvelteKit ([fa86229](https://github.com/nubolab-ffwd/svelte-fluent/commit/fa862290605f08937ef3945cd201254956d46674))

### [0.2.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.2.0...v0.2.1) (2020-12-18)


### Bug Fixes

* fix for translate store always returning undefined ([3525142](https://github.com/nubolab-ffwd/svelte-fluent/commit/35251421e52bee673a912f250c3b0deca102d037))

## [0.2.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.5...v0.2.0) (2020-12-18)


### Features

* expose stores for retrieving translations directly from FluentProvider ([12ad13d](https://github.com/nubolab-ffwd/svelte-fluent/commit/12ad13de5141f39a9f3aa1a89555a44f61628fc7))

### [0.1.5](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.4...v0.1.5) (2020-10-14)

### [0.1.4](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.3...v0.1.4) (2020-08-20)


### Bug Fixes

* process message attributes with FluentBundle.formatPattern ([0fa5741](https://github.com/nubolab-ffwd/svelte-fluent/commit/0fa57419238799718c2c4e1025b5211017409f5f))

### [0.1.3](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.2...v0.1.3) (2020-08-06)


### Bug Fixes

* ensure FluentProvider updates store when bundles change ([697d399](https://github.com/nubolab-ffwd/svelte-fluent/commit/697d39951099c6db4f275cd6190c189ec3e86539))
* wrap bundles in CachedSyncIterable ([8f356f3](https://github.com/nubolab-ffwd/svelte-fluent/commit/8f356f37153ca8a08c50eef882130f7f46edd5d0))

### [0.1.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.1...v0.1.2) (2020-07-02)

### [0.1.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.0...v0.1.1) (2020-07-01)


### Bug Fixes

* update broken imports in README example ([6b657fd](https://github.com/nubolab-ffwd/svelte-fluent/commit/6b657fd7039def8a591c00c18bfa42a2063fe751))

## 0.1.0 (2020-07-01)


### Features

* add support for DOM overlays (experimental) and finish FluentProvider and Localized components ([3960bdb](https://github.com/nubolab-ffwd/svelte-fluent/commit/3960bdbccf0ff7b95d387c4313e673fd74a6c3e2))


### Bug Fixes

* prevent Overlay detach error if translation id does not exist ([19cd78a](https://github.com/nubolab-ffwd/svelte-fluent/commit/19cd78a16cc880eb4bbf334a8f66f0a63aae0c0f))
* webpack compatibility ([89ee4ee](https://github.com/nubolab-ffwd/svelte-fluent/commit/89ee4eeacbe0cc778600380f28d7dd6bf3b3bdda))
