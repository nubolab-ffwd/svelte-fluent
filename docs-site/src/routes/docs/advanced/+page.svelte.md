<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		TutorialFirstStepsExample,
		TutorialInterpolationCustomFunctionsExample,
		TutorialInterpolationExample,
		TutorialInterpolationFormattingExample,
		TutorialMultiLanguageExample,
		TutorialTranslationFilesExample
	} from '$lib/rendered-examples';
</script>

# Advanced features

## Custom functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the `functions` option of `FluentBundle`.

You can also check out the
[code of the built-in Fluent Functions](https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts)
for more examples.

<TutorialInterpolationCustomFunctionsExample />
