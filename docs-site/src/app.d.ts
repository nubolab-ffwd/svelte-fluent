import 'unplugin-icons/types/svelte';
import '@nubolab-ffwd/svelte-fluent/types';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			seo?: {
				title?: string;
				description?: string;
			};
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
