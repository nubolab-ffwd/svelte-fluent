declare module '*.ftl' {
	import { FluentResource } from '@fluent/bundle';
	const resource: FluentResource;
	export default resource;
}
