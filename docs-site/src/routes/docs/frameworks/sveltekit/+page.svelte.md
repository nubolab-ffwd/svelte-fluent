---
title: SvelteKit
---

<script lang="ts">
	import { base } from '$app/paths'
	import Callout from '$lib/Callout.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import screenshot from './screenshot.png?w=500;900;1200&webp&metadata'
	import screenshotBonus from './screenshot-bonus.png?w=500;900;1200&webp&metadata'
</script>

# {title}

Follow this guide to integrate `svelte-fluent` into a SvelteKit project, covering initial setup, server-side language negotiation, and a complete form validation example.

<Callout title="Project setup required">

This guide assumes you have already created a SvelteKit project with TypeScript support and have installed `svelte-fluent` as shown on the **[Getting Started]({base}/docs/getting-started#installation)** page.

</Callout>

## Install Additional Dependencies

First, we need to install a few packages from the Fluent ecosystem that this guide relies on for features like language negotiation.

```sh
npm install --save-dev @fluent/bundle @fluent/langneg
```

## Configure Vite Plugin

Some features of `svelte-fluent` require a vite plugin to function. Let's add it to `vite.config.ts`:

```diff title="vite.config.ts"
 import { sveltekit } from '@sveltejs/kit/vite';
 import { defineConfig } from 'vite';
+import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

 export default defineConfig({
-       plugins: [sveltekit()]
+       plugins: [svelteFluent(), sveltekit()]
 });
```

## Create translation files

Let's create some translation files that we can use in our application:

```ftl title="src/translations/en.ftl"
welcome = Welcome to svelte-fluent!
```

```ftl title="src/translations/de.ftl"
welcome = Willkommen bei svelte-fluent!
```

## Load translations and select language

Now that we have some translation files, we can load them.
We also want our app to respect the browser language settings of our visitors.
Let's create some helpers for that in `src/lib/fluent.ts`:

```ts title="src/lib/fluent.ts"
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

## Add server hook

We need to add a [SvelteKit server hook](https://kit.svelte.dev/docs/hooks#server-hooks)
that selects the appropriate locale and creates the <ReferenceLink name="SvelteFluent" /> object.

Let's use the new helpers we created to build the hook:

```ts title="src/hooks.server.ts"
import { generateBundles, negotiateLocale } from '$lib/fluent';
import type { Handle } from '@sveltejs/kit';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.locale = negotiateLocale(event);
	event.locals.fluent = createSvelteFluent(generateBundles(event.locals.locale));

	return resolve(event);
};
```

At this point, TypeScript will report an error for `event.locals.locale`
and `event.locals.fluent`. To fix this we need to modify our `src/app.d.ts`:

```ts title="src/app.d.ts"
import '@nubolab-ffwd/svelte-fluent/types';
import { SvelteFluent } from '@nubolab-ffwd/svelte-fluent';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: string;
			fluent: SvelteFluent;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
```

By adding `import '@nubolab-ffwd/svelte-fluent/types';`;, you also provide TypeScript with the necessary definitions to
understand `.ftl` file imports, which will resolve any errors you may have seen in your editor.

## Client integration

On the client side, it's impossible to access the `fluent` instance we created in the server hook.
We need to pass the _locale_ that was negotiated on the server to the client, and then re-create
the `fluent` instance in the browser.

Let's start by exposing the `locale` from the server in `src/routes/+layout.server.ts`:

```ts title="src/routes/+layout.server.ts"
export function load(event) {
	// expose selected locale from hook to client
	return { locale: event.locals.locale };
}
```

Now that the locale is available on the client as `data.locale`, we can create a new `SvelteFluent`
instance in `src/routes/+layout.ts`:

```ts title="src/routes/+layout.ts"
import { generateBundles } from '$lib/fluent';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

export function load(event) {
	return {
		fluent: createSvelteFluent(generateBundles(event.data.locale))
	};
}
```

Finally, we can access the `fluent` object via `data.fluent` and use it to initialize the context
in `src/routes/+layout.svelte`, which is required for using the `<Localized>` component and
`useLocalize` helper.

```svelte title="src/routes/+layout.svelte"
<script lang="ts">
	import { setSvelteFluent } from '@nubolab-ffwd/svelte-fluent';
	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: PageData; children: Snippet } = $props();
	setSvelteFluent(() => data.fluent);
</script>

{@render children()}
```

## Render your first localized message

With all the setup work complete, it's finally time to render your first
localized message in `src/routes/+page.svelte`:

```svelte title="src/routes/+page.svelte"
<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<h1><Localized id="welcome" /></h1>
```

## Launch the app

Now we have all the pieces in place and can open the app. Run this in a terminal:

```sh
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) and you should see the app.

[![Screenshot of the opened browser window]({screenshot})]({screenshot})

## Bonus: server-side localization

We want to extend our application with a form. The form should validate inputs
and generate localized error messages if validation fails.

Let's start by adding some additional messages to our translation files:

**In `src/translations/en.ftl`:**

```diff title="src/translations/en.ftl"
 welcome = Welcome to svelte-fluent!
+
+example-form-heading = Example form
+example-form-name-field-label = Name
+example-form-submit-button = Submit
+  .aria-label = Submit form
+
+example-form-name-required-error = Name must not be empty
+example-form-success-message = Form was submitted successfully!
```

**In `src/translations/de.ftl`:**

```diff title="src/translations/de.ftl"
 welcome = Willkommen bei svelte-fluent!
+
+example-form-heading = Beispielformular
+example-form-name-field-label = Name
+example-form-submit-button = Absenden
+  .aria-label = Formular absenden
+
+example-form-name-required-error = Name darf nicht leer sein
+example-form-success-message = Formular wurde erfolgreich abgeschickt!
```

Next, we need a form action in `src/routes/+page.server.ts` to handle the logic.

```ts title="src/routes/+page.server.ts"
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const name = data.get('name');
		if (!name || !name.toString().trim()) {
			// render the localized error message using the fluent instance from the hook
			const error = locals.fluent.localize('example-form-name-required-error');
			return fail(400, { name, error });
		}
		return { success: true };
	}
} satisfies Actions;
```

Finally, we update our page in `src/routes/+page.svelte`. By leveraging the `<Localized>` component, we can
declaratively build our form using the messages defined in our translation files. This keeps the markup clean
and readable while ensuring all text and attributes are correctly localized.

```svelte title="src/routes/+page.svelte"
<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	const nameInputId = $props.id();
</script>

<h1><Localized id="welcome" /></h1>

<h2><Localized id="example-form-heading" /></h2>

{#if form?.success}
	<p><Localized id="example-form-success-message" /></p>
{/if}

<form method="POST">
	{#if form?.error}<p class="error">{form.error}</p>{/if}

	<Localized id="example-form-name-field-label" tag={['label', { for: nameInputId }]} />
	<input id={nameInputId} name="name" value={form?.name ?? ''} />

	<Localized id="example-form-submit-button" tag="button" />
</form>
```

Now open your browser and go to [http://localhost:5173](http://localhost:5173) and you should see
the new form that displays localized error messages when you submit it.

[![Screenshot of the opened browser window]({screenshotBonus})]({screenshotBonus})

## What's next?

You now have a fully functional application where you can localize messages with `svelte-fluent`.

You can learn more about how to use `svelte-fluent` in the [Tutorial]({base}/docs/tutorial),
explore more powerful features in the [Advanced Features guide]({base}/docs/advanced-features),
or check out the [Reference]({base}/docs/reference) for API documentation.
