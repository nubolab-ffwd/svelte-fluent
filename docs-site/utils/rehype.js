import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('unified').Transformer<Root, Root>} Transformer
 */

/**
 * @returns {Transformer}
 */
export function rehypeHeadings() {
	return (tree, vFile) => {
		const headings = [];
		visit(tree, 'element', (node) => {
			if (headingRank(node)) {
				headings.push({
					rank: headingRank(node),
					text: toString(node),
					id: node.properties.id
				});
			}
		});
		vFile.data.matter ??= {};
		vFile.data.matter.headings = headings;
	};
}

/**
 * @returns {Transformer}
 */
export function rehypeUnescapeSvelte() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
				node.properties.href = node.properties.href.replace(/%7B/g, '{').replace(/%7D/g, '}');
			}

			if (node.tagName === 'img' && node.properties && typeof node.properties.src === 'string') {
				node.properties.src = node.properties.src.replace(/%7B/g, '{').replace(/%7D/g, '}');
			}
		});
	};
}
