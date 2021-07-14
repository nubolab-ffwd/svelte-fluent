# Svelte Fluent [![Docs](https://img.shields.io/badge/docs-Storybook-blue)](https://nubolab-ffwd.github.io/svelte-fluent/) ![CI](https://github.com/nubolab-ffwd/svelte-fluent/workflows/CI/badge.svg) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

`svelte-fluent` provides [Svelte](https://svelte.dev/) components for easy
integration of [Fluent](https://projectfluent.org/) localization for Svelte / Sapper / SvelteKit
applications. Inspired by [@fluent/react](https://www.npmjs.com/package/@fluent/react).

# Installation

```
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

# Usage

More examples can be found in the rendered [Storybook](https://nubolab-ffwd.github.io/svelte-fluent/) and the related stories in the `stories/` directory.

```svelte
<script>
  import { negotiateLanguages } from '@fluent/langneg'
  import { FluentBundle, FluentResource } from '@fluent/bundle'
  import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent'

  // Store all translations as a simple object which is available
  // synchronously and bundled with the rest of the code.
  const RESOURCES = {
    fr: new FluentResource('hello = Salut le monde !'),
    'en-US': new FluentResource('hello = Hello, world!'),
    pl: new FluentResource('hello = Witaj świecie!')
  }

  // A generator function responsible for building the sequence
  // of FluentBundle instances in the order of user's language
  // preferences.
  function* generateBundles(userLocales) {
    // Choose locales that are best for the user.
    const currentLocales = negotiateLanguages(
      userLocales,
      ['fr', 'en-US', 'pl'],
      { defaultLocale: 'en-US' }
    )

    for (const locale of currentLocales) {
      const bundle = new FluentBundle(locale)
      bundle.addResource(RESOURCES[locale])
      yield bundle
    }
  }
</script>

<FluentProvider bundles={generateBundles(navigator.languages)}>
  <h1>
    <Localized id="hello" />
  </h1>
</FluentProvider>
```

# Bundler Notes

If you're not using DOM Overlays or not using SSR rendering everything should work out-of-the-box. Without bundler support DOM Overlays
will not get transformed during SSR rendering and will therefore show some visual flicker on page load. To address this `svelte-fluent` provides bundler plugins to enhance the SSR rendering.

## Rollup / Sapper

Add the `svelte-fluent/rollup-plugin` to your `rollup.config.js`. For example in sapper it should look like this:

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin'

export default {
  client: {
    plugins: [svelteFluent()]
  },
  server: {
    plugins: [svelteFluent({ ssr: true })]
  }
}
```

## Vite / SvelteKit

Add the `svelte-fluent/rollup-plugin` to your plugin list in `vite.config.js` or `svelte.config.js`. For example in SvelteKit it should look like this:

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin'

export default {
  kit: {
    vite: {
      plugins: [svelteFluent()]
    }
  }
}
```

The rollup plugin is vite-aware and will automatically detect if SSR processing is needed. Don't pass `{ssr: true}` in the plugin options.

## Webpack

Currently there is no `svelte-fluent` bundler plugin for Webpack. You can still use the `<Localized>` component but `<Overlay>` should be considered unsupported unless you're not using SSR.

Contributions of a Webpack loader that replicates the Rollup plugin in `src/rollup-plugin.js` would be welcome.

# DOM Overlays (experimental)

**Important:** for proper SSR support of DOM Overlays some bundler support is needed. Please check the [Bundler Notes](#bundler-notes).

This library includes experimental support for DOM overlays via
[@fluent/dom](https://www.npmjs.com/package/@fluent/dom). For a detailed
description of the features see
[their documentation](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays).

## Limitations

In addition to the [limitations listed in the @fluent/dom wiki](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays#limitations)
the following limitations apply to DOM Overlays in `svelte-fluent`

- Updates to `<Overlay/>` component props and children cause a high overhead and should be minimized
- Svelte actions (`<tag use:someaction/>`) won't work correctly for children of the `<Overlay/>` component
- Svelte transitions/animations (`<tag transition:fade />`) won't work correctly for children of the `<Overlay/>` component
- Svelte bindings (`<tag bind:clientWidth={something} />`) won't work correctly for children of the `<Overlay/>` component
- Event handlers (`<tag on:click={handleClick} />`) bound on children of the `<Overlay/>` component will not fire

## Example

### FTL file

```
info = Read the <a data-l10n-name="link">documentation</a> for more information.
```

### Component.svelte

```svelte
<script>
  import { Overlay } from 'svelte-fluent'
  const linkHref = 'https://example.com/'
</script>

<p>
  <Overlay id="info">
    <a data-l10n-name="link" href={linkHref} />
  </Overlay>
</p>
```

### Render result

```html
<p>
  Read the
  <a data-l10n-name="link" href="https://example.com/">documentation</a> for
  more information.
</p>
```
