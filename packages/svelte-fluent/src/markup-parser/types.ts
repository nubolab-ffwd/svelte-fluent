/**
 * A simplified representation of a DOM Text node
 */
type SimpleTextNode = {
	nodeName: '#text';
	textContent: string;
};

/**
 * A simplified representation of a DOM Element node
 */
type SimpleElementNode = {
	nodeName: string;
	localName: string;
	textContent: string;
	getAttribute(name: string): string | null;
	attributes: Iterable<{ name: string; value: string }>;
};

export type Handlers = {
	textNode: (node: SimpleTextNode) => void;
	elementNode: (node: SimpleElementNode) => Handlers | void;
};

export type Parser = {
	type?: string;
	parse(source: string, handlers: Handlers): void;
};
