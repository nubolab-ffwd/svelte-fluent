# Svelte Fluent

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

`svelte-fluent` provides [Svelte](https://svelte.dev/) components for easier
integration of [Fluent](https://projectfluent.org/) localization for Svelte/Sapper
applications.

# Usage

```svelte
<script>
    import { negotiateLanguages } from '@fluent/langneg';
    import { FluentBundle, FluentResource } from '@fluent/bundle';
    import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent'

    // Store all translations as a simple object which is available
    // synchronously and bundled with the rest of the code.
    const RESOURCES = {
        'fr': new FluentResource('hello = Salut le monde !'),
        'en-US': new FluentResource('hello = Hello, world!'),
        'pl': new FluentResource('hello = Witaj świecie!'),
    };

    // A generator function responsible for building the sequence
    // of FluentBundle instances in the order of user's language
    // preferences.
    function* generateBundles(userLocales) {
        // Choose locales that are best for the user.
        const currentLocales = negotiateLanguages(
            userLocales,
            ['fr', 'en-US', 'pl'],
            { defaultLocale: 'en-US' }
        );

        for (const locale of currentLocales) {
            const bundle = new FluentBundle(locale);
            bundle.addResource(RESOURCES[locale]);
            yield bundle;
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

If you're using Sapper with Rollup based on the [sapper-template](https://github.com/sveltejs/sapper-template) repository everything should work out-of-the-box.
For regular Svelte applications or Webpack some extra settings are required.

## Rollup


For browser builds (no SSR) make sure to include the following configuration for the `@rollup/plugin-replace` plugin

```js
replace({
    'process.browser': true
})
```

## Webpack

- Add `jsdom` to your `package.json` `"dependencies"` via `yarn add jsdom` or `npm install --save jsdom`
- Add `jsdom` to the `externals` webpack config for your SSR builds. Not necessary if you're using Sapper based on the
    `sapper-template` repository because it already adds all `"dependencies"` to `externals`.
- For browser builds (no SSR) make sure to include the following webpack plugin configuration

    ```
    new webpack.DefinePlugin({
        'process.browser': true,
    })
    ```

# DOM Overlays (experimental)

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
    Read the <a data-l10n-name="link" href="https://example.com/">documentation</a> for more information.
</p>
```
