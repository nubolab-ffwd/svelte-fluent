<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import TutorialAttributesSimpleExample from '$lib/rendered-examples/TutorialAttributesSimpleExample.svelte'
	import TutorialAttributesComplexExample from '$lib/rendered-examples/TutorialAttributesComplexExample.svelte'
	import TutorialChangeWrapperExample from '$lib/rendered-examples/TutorialChangeWrapperExample.svelte'
	import TutorialInterpolationExample from '$lib/rendered-examples/TutorialInterpolationExample.svelte'
</script>

# Tutorial

This tutorial will guide you through the fundamental concepts of `svelte-fluent`. Starting with the basics of setting up your project and displaying your first translation, you will learn how to handle multiple languages, variables, and advanced value formatting.

## Interpolate variables

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the <ReferenceLink name="Localized" /> component.

<TutorialInterpolationExample />

## Customize wrapper element

By default, `<Localized>` renders a `<span>` element to wrap your translation. You can easily change this to any other HTML tag using the `tag` prop.

<TutorialChangeWrapperExample />

## Localizable attributes

Fluent messages can have attributes, which are useful for providing extra information like `aria-label` or `title`. The `<Localized>` component can automatically apply these to the wrapper element. For security, only safe attributes are allowed based on the `tag` prop. You can allow additional attributes using the `allowAttributes` prop.

<TutorialAttributesSimpleExample />

### Advanced customization with the `children` snippet

For full control over the output, you can use the `children` snippet. The snippet receives two arguments:

- `attributes`: A record containing the attributes from the Fluent message.
- `translatedContent`: A snippet that renders the translated text.

This pattern is ideal for advanced cases where you need to render a specific element, like an `<input>`, and apply localized attributes to it. By using the `children` snippet, you can take complete control over the final HTML while still sourcing attributes from your translation files.

It's important to note that the `attributes` passed to the snippet are still filtered based on the security rules of the `tag` and `allowAttributes` props to prevent unwanted attributes from being passed through.

<TutorialAttributesComplexExample />

---

Congratulations\! You've now covered the core features of `svelte-fluent` and can handle the most common localization tasks.

When you're ready to tackle more complex scenarios, the library offers more powerful features. Our **[Advanced Features guide]({base}/docs/advanced)** is the perfect next step to learn about topics like:

- **Svelte Component Injection:** Seamlessly embed your own interactive Svelte components directly inside your translations.
  **Formatting Interpolations:** Take control over how numbers, dates, and other variables are displayed.
- **Custom Functions:** Extend Fluent's capabilities with your own custom formatting logic for variables.

Check out the advanced guide to unlock the full potential of `svelte-fluent`.
