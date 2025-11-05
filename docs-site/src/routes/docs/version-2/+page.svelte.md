<script>
	import { base } from '$app/paths'
</script>

# Version 2

We're thrilled to release version 2 of `svelte-fluent`\! This is a major update focused on simplifying the API, unlocking powerful new features like Svelte component injection, and embracing modern, reactive Svelte patterns for a better developer experience.

This page provides an overview of the most important changes, new features, and breaking changes introduced in this version.

## Key Highlights

### 1\. The New, Unified `<Localized>` Component

To streamline the API, the old `Localized` and `Overlay` components have been merged into a single, more powerful `<Localized>` component. This single component is now the primary way to render translations in your markup and unlocks several powerful new capabilities.

**Breaking Change: New `<Localized>` children Snippet API**

The arguments passed to the `<Localized>` component's `children` snippet have been updated. This change was necessary to support new features in version 2, such as the improved SSR implementation and Svelte component injection.

Here are the differences from version 1:

- The `attrs` argument (a record of attributes) has been renamed to `attributes`.
- The `text` argument (a string) has been replaced by `content` (a renderable snippet).

For more details, see the **[Custom Rendering]({base}/docs/advanced-features#custom-rendering)** section in our advanced features guide.

**New Feature: Wrapper Element with localizable attributes**

The new `<Localized>` component now always renders a wrapper element, which you can customize using the `tag` prop (e.g., as a `<span>` or `<button>`). The primary purpose of this wrapper is to provide a home for attributes defined directly in your Fluent messages. By default, a list of safe attributes (including `title` and `aria-label`) are automatically applied, while any other attributes not on this default list must be explicitly allowed through the `allowAttributes` prop.

For example, here is how you would create a localized message, showing both a simple and an advanced pattern.

**In your `.ftl` file:**

```ftl
important-notice = Important Notice
    .title = This is an important notice

read-more = Read more
    .aria-label = Read more about our new features
```

**In your Svelte component:**

```svelte
<Localized id="important-notice" tag="strong" />

<Localized id="read-more">
	{#snippet children({ attributes, content })}
		<a href="/new-features" {...attributes}>
			{@render content()}
		</a>
	{/snippet}
</Localized>
```

**Resulting HTML:**

The code above will render the following HTML output:

```html
<strong title="This is an important notice">Important Notice</strong>

<a href="/new-features" aria-label="Read more about our new features">Read more</a>
```

**New Feature: Svelte Component Insertion**

For the first time, you can now insert your own Svelte components directly inside your translation strings, allowing for richer, more interactive localized content. You can now define your components in your localization config and reference them directly in your `.ftl` files for seamless integration.

For instance, you can insert an `Icon` component into a login button:

**In your Svelte component:**

```svelte
<script lang="ts">
	import { Localized, ComponentElement } from '@nubolab-ffwd/svelte-fluent';
	import GoogleIcon from './GoogleIcon.svelte';
</script>

<Localized
	id="google-login-button"
	tag="button"
	elements={{
		'google-icon': new ComponentElement(GoogleIcon)
	}}
/>
```

**In your `.ftl` file:**

```ftl
google-login-button =
  <fluent-component data-element="google-icon"></fluent-component> Login with Google
```

This will render your `GoogleIcon` component inside the button alongside the translated text.

A key advantage of this approach is that it gives translators control over the component's position. For a right-to-left language, the translator could place the icon after the text to ensure it feels natural for that locale:

**In your `.ftl` file:**

```ftl
google-login-button =
  Login with Google <fluent-component data-element="google-icon"></fluent-component>
```

**Robust and Reliable SSR**

While `svelte-fluent` v1 supported SSR, its reliance on internal Svelte APIs proved to be problematic.
Recent Svelte updates changed these internal APIs, which broke the SSR functionality of the `Overlay` component.
The new `<Localized>` component in version 2 now use a new approach for SSR which doesn't rely on internal Svelte APIs, providing a robust and future-proof solution.

### 2\. New Reactive API: `useLocalize` and `useSvelteFluent`

The `FluentContext` API has been replaced by two new reactive utilities: `useLocalize` and `useSvelteFluent`.
`useLocalize` is a reactive function for accessing translations, while `useSvelteFluent` provides access to the full `SvelteFluent` instance.

To further clarify the new API, the `initFluentContext` function has been renamed to `setSvelteFluent`. This new name better reflects its action: setting the `SvelteFluent` instance that the new utilities consume.

As a result, `getFluentContext`, `setSvelteFluent`'s (formerly `initFluentContext`'s) return value, and the `FluentContext` type are no longer part of the public API.

### 3\. Housekeeping: Component Removals

To simplify the library, the `FluentProvider`, `Overlay`, and legacy `Localized` components have been removed.

## Breaking Changes

Here is a scannable checklist of all breaking changes.

- **Components:**
  - The `<Localized>` component's `children` snippet arguments have changed.
    The v1 `({ text, attrs })` arguments are replaced by `({ attributes, content })`, and `content` is now a renderable snippet, not a string.
  - The `<Localized>` component now always renders a wrapper element (defaults to `<span>`).
  - The `<Overlay>` component has been removed (functionality is now in `<Localized>`).
  - The `<FluentProvider>` component has been removed.
- **API & Types:**
  - The `initFluentContext` function has been renamed to `setSvelteFluent`.
  - The `getFluentContext` function has been removed (use `useLocalize` or `useSvelteFluent`).
  - `setSvelteFluent` (formerly `initFluentContext`) no longer returns a value.
  - The `FluentContext` type is no longer exported.

## Migration Guide

This guide will help you upgrade your project from `svelte-fluent` v1.x to v2.0. Version 2 introduces a unified `<Localized>` component and a new reactive API, which will require some updates to your existing code.

We recommend following these steps in order.

### Step 1: Update Component Usage

The most significant changes are related to the components. The old `<Overlay>` and legacy `<Localized>` components have been removed in favor of a single, unified `<Localized>` component with a more powerful and consistent API.

#### A. Replace `<Overlay>` with `<Localized>`

The primary pattern for handling HTML content within translations has changed from using the `<Overlay>` component to using the `elements` prop on the new `<Localized>` component.

**Before (v1):**

You used `<Overlay>` and `data-l10n-name` to map HTML elements.

**In your Svelte component:**

```svelte
<script>
	import { Overlay } from '@nubolab-ffwd/svelte-fluent';
</script>

<Overlay id="info">
	<a data-l10n-name="link" href="https://example.com/"></a>
</Overlay>
```

**In your `.ftl` file:**

```ftl
info = Read the <a data-l10n-name="link">documentation</a> for more information.
```

**After (v2):**

Now, you use `<Localized>`, define elements in the `elements` prop, and use `data-element` in your translation.

**In your Svelte component:**

```svelte
<script>
	import { Localized, TagElement } from '@nubolab-ffwd/svelte-fluent';
</script>

<Localized
	id="info"
	elements={{
		link: new TagElement('a', { href: 'https://example.com/' })
	}}
/>
```

**In your `.ftl` file:**

```ftl
info = Read the <a data-element="link">documentation</a> for more information.
```

#### B. Update the `children` Snippet

The `children` snippet arguments have changed from `({ text, attrs })` to `({ attributes, content })`.
Note that `content` is now a renderable snippet, not a string.

**Example 1: Wrapping Content**

**Before (v1):**

The `children` snippet was passed the translated text to access the translated text.

```svelte
<Localized id="greeting" let:text>
	{#snippet children({ text })}
		<strong>{text}</strong>
	{/snippet}
</Localized>
```

**After (v2):**

To wrap a translation in an element, use the built-in `tag` prop. You can also override the `children` snippet for full control over the rendered markup.

```svelte
<Localized id="greeting" tag="strong" />

<Localized id="login-button" tag="button">
	{#snippet children({ attributes })}
		<button {...attributes}>
			<Icon />
		</button>
	{/snippet}
</Localized>
```

To wrap a translation in an element, use the built-in `tag` prop, as shown in the `Tutorial`'s **[Change wrapper element]({base}/docs/tutorial#change-wrapper-element)** section.

For full control over the rendered markup (like in the `<button>` example above), see the **[Custom Rendering]({base}/docs/advanced-features#custom-rendering)** section in the advanced guide.

**Example 2: Complex Layouts with Attributes**

For v1 code that used the `children` snippet to access `text` and `attrs` for UI logic (e.g., `onclick` handlers) or to group widget messages:

The v2 `<Localized>` component is not a direct replacement. It **always** renders a wrapper element and would attempt to apply the message's attributes to the DOM, which could have unexpected results.

The correct v2 migration is to replace the `<Localized>` component entirely with the reactive `localize` function from the `useLocalize` utility. This allows you to fetch the raw strings directly for your logic, just as the v1 snippet did.

**In your `.ftl` file:**

```ftl
confirm-prompt = Are you sure you want to proceed?
  .alert-ok = Action confirmed!
  .alert-cancel = Action cancelled.
```

**Before (v1):**

You used the `children` snippet `text` and `attrs` arguments to build your UI.

```svelte
<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<Localized id="confirm-prompt">
	{#snippet children({ text, attrs })}
		<div>{text}</div>
		<div>
			<button onclick={() => alert(attrs['alert-ok'])}>Ok</button>
			<button onclick={() => alert(attrs['alert-cancel'])}>Cancel</button>
		</div>
	{/snippet}
</Localized>
```

**After (v2):**

You now use the reative `localize` function to get the main translation and each attribute individually.

```svelte
<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
</script>

<div>{localize('confirm-prompt')}</div>
<div>
	<button onclick={() => alert(localize('confirm-prompt.alert-ok'))}>Ok</button>
	<button onclick={() => alert(localize('confirm-prompt.alert-cancel'))}>Cancel</button>
</div>
```

#### C. Remove the Deprecated `<FluentProvider>` Component

The `<FluentProvider>` component was deprecated in a previous version and has now been removed. You should replace it by initializing the context directly with `createSvelteFluent` and `setSvelteFluent`.

**Before (v1)**

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
</FluentProvider>
```

**After (v2)**

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" />
```

### Step 2: Adopt the New Reactive API

The method for accessing translations in your `<script>` block has been updated to a more idiomatic, reactive Svelte pattern.

#### Replace `getFluentContext` with `useLocalize`

**Before (v1):**

You used `getFluentContext` and destructuring to access the reactive `localize` function.

```svelte
<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
	let title = $derived(localize('my-title'));
</script>
```

**After (v2):**

The `getFluentContext` function has been replaced by the `useLocalize` utility.
Using this utility now gives you direct access to the reactive `localize` function.

```svelte
<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
	let title = $derived(localize('my-title'));
</script>
```
