<script lang="ts">
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import screenshot from './screenshot.png?w=500;900;1200&avif&metadata'
	import screenshotBonus from './screenshot-bonus.png'

	const snippets = import.meta.glob('./snippets/*.{svelte,patch}', {
		eager: true,
		query: '?raw&highlight',
		import: 'default'
	})
</script>

<style lang="postcss">
	img {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		border-radius: calc(var(--s0) / 4);
		margin-inline: auto;
		max-width: 100%;
	}
</style>

# Frameworks

## SvelteKit

### Initialize a SvelteKit app

Use `npm create` to initialize an new SvelteKit project called `svelte-fluent-sveltekit`.

- Select "Skeleton project" when asked for the template
- Select "Yes, using TypeScript syntax" when asked for typescript type checking

```sh
npm create svelte@latest svelte-fluent-sveltekit
cd svelte-fluent-sveltekit
npm install
```

Now install `svelte-fluent`:

```sh
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

We also need `@fluent/bundle` to parse the `.ftl` files:

```sh
npm install --save-dev @fluent/bundle
```

We will be using `@fluent/langneg` for selecting the displayed language based on
the browser's `Accept-Language` header. Let's install it with:

```sh
npm install --save-dev @fluent/langneg
```

Some features of `svelte-fluent` require a vite plugin to function.
Let's add it to `vite.config.ts`:

```diff
 import { sveltekit } from '@sveltejs/kit/vite';
 import { defineConfig } from 'vite';
+import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

 export default defineConfig({
-       plugins: [sveltekit()]
+       plugins: [svelteFluent(), sveltekit()]
 });

```

### Create translation files

Let's create some translation files that we can use in our application:

```ftl
# src/translations/en.ftl

welcome = Welcome to svelte-fluent!
```

```ftl
# src/translations/de.ftl

welcome = Willkommen bei svelte-fluent!
```

### Load translations and select language

Now that we have some translation files, we can load them.
We also want our app to respect the browser language settings of our visitors.
Let's create some helpers for that in `src/lib/fluent.ts`:

```ts
// src/lib/fluent.ts

import { FluentBundle, FluentResource } from '@fluent/bundle';
import { acceptedLanguages, negotiateLanguages } from '@fluent/langneg';
import type { RequestEvent } from '@sveltejs/kit';
import resourcesDe from '../translations/de.ftl';
import resourcesEn from '../translations/en.ftl';

const defaultLocale = 'en';

const resources: Record<string, FluentResource> = {
	de: resourcesDe,
	en: resourcesEn
};

export function generateBundles(locale: string): FluentBundle[] {
	const bundle = new FluentBundle(locale);
	bundle.addResource(resources[locale]);
	return [bundle];
}

export function negotiateLocale(ev: RequestEvent): string {
	const accepted = acceptedLanguages(ev.request.headers.get('accept-language') ?? '');
	return (
		negotiateLanguages(accepted, Object.keys(resources), {
			defaultLocale,
			strategy: 'lookup'
		}).at(0) ?? defaultLocale
	);
}
```

Typescript will complain about the imports of the `.ftl` files.
Don't worry, we'll fix this in a moment.

### Add server hook

We need to add a [SvelteKit server hook](https://kit.svelte.dev/docs/hooks#server-hooks)
that selects the appropriate locale and creates the <ReferenceLink name="SvelteFluent" /> object.

Let's use the new helpers we created to build the hook:

```ts
// src/hooks.server.ts

import { generateBundles, negotiateLocale } from '$lib/fluent';
import type { Handle } from '@sveltejs/kit';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.locale = negotiateLocale(event);
	event.locals.fluent = createSvelteFluent(generateBundles(event.locals.locale));

	return resolve(event);
};
```

Now Typescript will complain about `event.locals.locale` and `event.locals.fluent`.
To fix this we need to modify our `src/app.d.ts`:

```diff
+import '@nubolab-ffwd/svelte-fluent/types';
+import { SvelteFluent } from '@nubolab-ffwd/svelte-fluent';
+
 // See https://kit.svelte.dev/docs/types#app
 // for information about these interfaces
 declare global {
        namespace App {
                // interface Error {}
-               // interface Locals {}
+               interface Locals {
+                       locale: string;
+                       fluent: SvelteFluent;
+               }
                // interface PageData {}
                // interface PageState {}
                // interface Platform {}
```

### Client integration

On the client side, it's impossible to access `event.locals.locale` and
`event.locals.fluent` that we added in the server hook. We need some additional
code to bridge the gap.

Let's start by adding a `src/routes/+layout.server.ts`:

```ts
// src/routes/+layout.server.ts

export function load(event) {
	// expose selected locale from hook to client
	return { locale: event.locals.locale };
}
```

This exposes `event.locals.locale` as `event.data.locale` on the client.
We also need the <ReferenceLink name="SvelteFluent" /> object which we can create in `src/routes/+layout.ts`:

```ts
// src/routes/+layout.ts

import { generateBundles } from '$lib/fluent';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

export function load(event) {
	return {
		...event.data,
		fluent: createSvelteFluent(generateBundles(event.data.locale))
	};
}
```

Now we can access the <ReferenceLink name="SvelteFluent" /> object via `event.data.fluent` and
use it to initialize the <ReferenceLink name="FluentContext" /> in `src/routes/+layout.svelte` which
is required for using the <ReferenceLink name="Localized" /> and <ReferenceLink name="Overlay" /> components.

{@html snippets['./snippets/client-integration-layout.svelte']}

### Render your first localized message

With all the setup work complete, it's finally time to render your first
localized message in `src/routes/+page.svelte`:

{@html snippets['./snippets/first-localized-page.svelte']}

### Launch the app

Now we have all the pieces in place and can open the app. Run this in a terminal:

```sh
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) and you should see the app.

[![Screenshot of the opened browser window]({screenshot})]({screenshot})

### Bonus: server-side localization

We want to extend our application with a form. The form should validate inputs
and generate localized error messages if validation fails.

Let's start by adding some additional messages to our translation files:

```diff
 # src/translations/en.ftl

 welcome = Welcome to svelte-fluent!
+
+example-form =
+  .heading = Example form
+  .name-field-label = Name
+  .submit-label = Submit
+  .name-required-error = Name must not be empty
+  .success-message = Form was submitted successfully!
```

```diff
 # src/translations/de.ftl

 welcome = Willkommen bei svelte-fluent!
+
+example-form =
+  .heading = Beispielformular
+  .name-field-label = Name
+  .submit-label = Absenden
+  .name-required-error = Name darf nicht leer sein
+  .success-message = Formular wurde erfolgreich abgeschickt!
```

Next we add a form to `src/routes/+page.svelte`:

```diff
 </script>

 <h1><Localized id="welcome" /></h1>
+
+<Localized id="example-form">
+       {#snippet children({ attrs })}
+               <h2>{attrs.heading}</h2>
+               <form method="POST">
+                       <label>
+                               {attrs['name-field-label']}
+                               <input name="name" />
+                       </label>
+                       <button>{attrs['submit-label']}</button>
+               </form>
+       {/snippet}
+</Localized>
```

Also we need to add a [SvelteKit form action](https://kit.svelte.dev/docs/form-actions)
to `src/routes/+page.server.ts`:

```ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, locals: { fluent } }) => {
		const data = await request.formData();
		const name = data.get('name');
		if (!name || !name.toString().trim()) {
			// render the localized error message
			const error = fluent.localize('example-form.name-required-error');
			return fail(400, { name, error });
		}
		return { success: true };
	}
} satisfies Actions;
```

And finally, we need to handle the response from the action in our form in `src/routes/+page.svelte`:

{@html snippets['./snippets/final-props.patch']}

```diff
 <Localized id="example-form">
        {#snippet children({ attrs })}
                <h2>{attrs.heading}</h2>
+
+               {#if form?.success}
+                       <p>{attrs['success-message']}</p>
+               {/if}
+
                <form method="POST">
+                       {#if form?.error}<p class="error">{form.error}</p>{/if}
                        <label>
                                {attrs['name-field-label']}
-                               <input name="name" />
+                               <input name="name" value={form?.name ?? ''} />
                        </label>
                        <button>{attrs['submit-label']}</button>
                </form>
```

Now open your browser and go to [http://localhost:5173](http://localhost:5173) and you should see
the new form that displays localized error messages when you submit it.

[![Screenshot of the opened browser window]({screenshotBonus})]({screenshotBonus})

### What's next?

You now have a fully functional application where you can localize messages with `svelte-fluent`.

You can learn more about how to use `svelte-fluent` in the [Tutorial](../tutorial) or check out the [Reference](../reference) for API documentation.
