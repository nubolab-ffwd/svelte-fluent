# Version 2

We're thrilled to release version 2 of `svelte-fluent`\! This is a major update focused on simplifying the API, unlocking powerful new features like Svelte component injection, and embracing modern, reactive Svelte patterns for a better developer experience.

This page provides an overview of the most important changes, new features, and breaking changes introduced in this version.

## Key Highlights

### 1\. The New, Unified `<Localized>` Component

To streamline the API, the old `Localized` and `Overlay` components have been merged into a single, more powerful `<Localized>` component. This single component is now the primary way to render translations in your markup and unlocks several powerful new capabilities.

**Breaking Change: `<Localized>` children Snippet Behavior**

In previous versions, the `children` snippet received the translated text and attributes as slot props. In version 2.0, to simplify the API and provide a more robust composition model, the `children` snippet no longer receives any arguments. Its sole purpose is now to provide override content for the component, which is ideal for cases like accessible icon buttons.

**New Feature: Wrapper Element with localizable Attributes**

The new `<Localized>` component now always renders a wrapper element, which you can customize using the `tag` prop (e.g., as a `<span>` or `<button>`). The primary purpose of this wrapper is to provide a home for attributes defined directly in your Fluent messages. By default, a list of safe attributes (including `title` and `aria-label`) are automatically applied, while any other attributes not on this default list must be explicitly allowed through tag options.

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
	{#snippet children({ attributes, translatedContent })}
		<a href="/new-features" {...attributes}>
			{@render translatedContent()}
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

**New Feature: Svelte Component Injection**

For the first time, you can now embed your own Svelte components directly inside your translation strings, allowing for richer, more interactive localized content. You can now define your components in your localization config and reference them directly in your `.ftl` files for seamless integration.

For instance, you can inject an `Icon` component into a login button:

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

While `svelte-fluent` v1 supported SSR, its reliance on internal Svelte APIs proved to be fragile. Recent Svelte updates changed these internal APIs, which broke the SSR functionality of the `Overlay` component for many users. Version 2 resolves this by re-implementing this functionality in the new `<Localized>` component **without using any internal Svelte APIs,** providing a robust and future-proof solution.

### 2\. New Reactive API: `useLocalize` and `useSvelteFluent`

The `FluentContext` API has been replaced by two new reactive helpers: `useLocalize` and `useSvelteFluent`. `useLocalize` is a reactive store for accessing translations, while `useSvelteFluent` provides access to the full `SvelteFluent` instance. As a result, `getFluentContext`, `initFluentContext`'s return value, and the `FluentContext` type are no longer part of the public API.

### 3\. Housekeeping: Component Removals

To simplify the library, the `FluentProvider`, `Overlay`, and legacy `Localized` components have been removed.

## Breaking Changes

Here is a scannable checklist of all breaking changes.

- **Components:**
  - The `<Localized>` component's `children` snippet no longer receives the translated content as arguments.
  - The `<Localized>` component now always renders a wrapper element (defaults to `<span>`).
  - The `<Overlay>` component has been removed (functionality is now in `<Localized>`).
  - The `<FluentProvider>` component has been removed.
- **API & Types:**
  - The `getFluentContext` function has been removed (use `useLocalize` or `useSvelteFluent`).
  - `initFluentContext` no longer returns a value.
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

The behavior of the `children` snippet has changed. It no longer receives arguments and is now used only to provide override content.

**Example 1: Wrapping Content**

**Before (v1):**

The `children` snippet was used with `let:` directives to access the translated text.

```svelte
<Localized id="greeting" let:text>
	<strong>{text}</strong>
</Localized>
```

**After (v2):**

To wrap a translation in an element, use the built-in `tag` prop. The `children` snippet is now only for replacing the translated content entirely (e.g., for an icon button).

```svelte
<Localized id="greeting" tag="strong" />

<Localized id="login-button" tag="button">
	<Icon />
</Localized>
```

**Example 2: Complex Layouts with Attributes**

For more complex layouts, where the `children` snippet was previously used to access a message's attributes, the new approach is to use the `useLocalize` helper directly in your markup.

**In your `.ftl` file:**

```ftl
confirm = Please confirm the action.
  .ok     = Ok
  .cancel = Cancel
```

**Before (v1):**

You used the `children` snippet with `let:text` and `let:attrs` to build your UI.

```svelte
<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<Localized id="confirm">
	{#snippet children({ text, attrs })}
		<div>{text}</div>
		<div>
			<button onclick={() => alert('OK clicked')}>{attrs.ok}</button>
			<button onclick={() => alert('Cancel clicked')}>{attrs.cancel}</button>
		</div>
	{/snippet}
</Localized>
```

**After (v2):**

You now use the `useLocalize` helper to get the main translation and each attribute individually. This pattern is no longer handled by the `<Localized>` component.

```svelte
<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
</script>

<div>{localize('confirm')}</div>
<div>
	<button onclick={() => alert('OK clicked')}>{localize('confirm.ok')}</button>
	<button onclick={() => alert('Cancel clicked')}>{localize('confirm.cancel')}</button>
</div>
```

#### C. Remove the Deprecated `<FluentProvider>` Component

The `<FluentProvider>` component was deprecated in a previous version and has now been removed. You should replace it by initializing the context directly with `createSvelteFluent` and `initFluentContext`.

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
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" />
```

### Step 2: Adopt the New Reactive API

The method for accessing translations in your `<script>` block has been updated to a more idiomatic, reactive Svelte pattern.

#### Replace `getFluentContext` with `useLocalize`

**Before (v1):**

You used `getFluentContext` to access the reactive `localize` helper.

```svelte
<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
	let title = $derived(localize('my-title'));
</script>
```

**After (v2):**

The `getFluentContext` function has been replaced by the `useLocalize` helper. Calling this function now gives you direct access to the reactive `localize` helper.

```svelte
<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
	let title = $derived(localize('my-title'));
</script>
```
