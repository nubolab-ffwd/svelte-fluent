/**
 * @typedef {import('hast').Root} Root
 */

import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';

const attrs = `(?:\\s{0,1}[a-zA-z]+=(?:"){0,1}[a-zA-Z0-9]+(?:"){0,1})*`;
const context = `(?:\\s{0,1}context)=(?:"){0,1}module(?:"){0,1}`;
const RE_MODULE_SCRIPT = new RegExp(`^(<script` + attrs + context + attrs + `>)`);

/**
 *
 * @type {import('unified').Plugin<Array<void>, Root>}
 */
export default function rehypeHeadings() {
	return (tree, vFile) => {
		const headings = [];
		visit(tree, (node) => {
			if (headingRank(node) && node.properties) {
				headings.push({
					rank: headingRank(node),
					text: toString(node),
					id: node.properties.id
				});
			}
		});
		vFile.data.headings = headings;

		let moduleScriptNode;
		visit(tree, 'raw', (node) => {
			if (node.value.match(RE_MODULE_SCRIPT)) {
				moduleScriptNode = node;
			}
		});
		const scriptText = `export const headings = ${JSON.stringify(headings)}`;
		if (moduleScriptNode) {
			moduleScriptNode.value = moduleScriptNode.value.replace(
				RE_MODULE_SCRIPT,
				`$1\n\t${scriptText}`
			);
		} else {
			moduleScriptNode = {
				type: 'raw',
				value: `<script context="module">\n\t${scriptText}\n</script>`
			};
			tree.children = [moduleScriptNode, ...tree.children];
		}
	};
}
