import LocalizedSimple from './Simple.svelte';
import LocalizedVariables from './Variables.svelte';
import LocalizedCurrency from './Currency.svelte';
import LocalizedAttributes from './Attributes.svelte';
import LocalizedAttributesWithArgs from './AttributesWithArgs.svelte';

export default {
	title: 'Localized',
	argTypes: {
		locale: {
			options: ['de', 'en'],
			control: { type: 'select' }
		},
		unreadEmails: {
			control: { type: 'number', min: 1 }
		},
		balance: {
			control: { type: 'number', min: 1 }
		}
	}
};

export const Simple = (args) => ({
	Component: LocalizedSimple,
	props: args
});
Simple.args = { locale: 'en' };

export const Variables = (args) => ({
	Component: LocalizedVariables,
	props: args
});
Variables.args = { locale: 'en', unreadEmails: 1 };

export const Currency = (args) => ({
	Component: LocalizedCurrency,
	props: args
});
Currency.args = { locale: 'en', balance: 24.99 };

export const Attributes = (args) => ({
	Component: LocalizedAttributes,
	props: args
});
Attributes.args = { locale: 'en' };

export const AttributesWithArgs = (args) => ({
	Component: LocalizedAttributesWithArgs,
	props: args
});
AttributesWithArgs.args = { locale: 'en' };
