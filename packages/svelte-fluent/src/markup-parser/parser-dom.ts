import { type Parser } from './types.js';

type DOM = {
	Node: typeof Node;
	document: Document;
};

export const createDomParseImpl =
	(dom: DOM): Parser['parse'] =>
	(source, rootHandlers) => {
		const walk = (nodes: NodeListOf<ChildNode>, handlers: typeof rootHandlers) => {
			for (const node of nodes) {
				switch (node.nodeType) {
					case dom.Node.TEXT_NODE: {
						handlers.textNode(node as Text & { nodeName: '#text' });
						break;
					}
					case dom.Node.ELEMENT_NODE: {
						const childHandlers = handlers.elementNode(node as Element);
						if (childHandlers) {
							walk(node.childNodes, childHandlers);
						}
						break;
					}
				}
			}
		};

		const templateElement = dom.document.createElement('template');
		templateElement.innerHTML = source;

		walk(templateElement.content.childNodes, rootHandlers);
	};

export const createDomParser = (): Parser => {
	return {
		type: 'dom',
		parse: createDomParseImpl({ Node, document })
	};
};
