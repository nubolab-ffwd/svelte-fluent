export type MenuItem = {
	title?: string;
	text: string;
	href?: string;
	inPage?: boolean;
};
export type TopLevelMenultem = MenuItem & { submenu?: MenuItem[] };
export type Menu = TopLevelMenultem[];
export type MenuPath = number[] | undefined;
export type ActiveMenuItemResult = {
	path: MenuPath;
	menu?: TopLevelMenultem;
	submenu?: MenuItem;
};

export function findActiveMenuItem(
	menu: Menu,
	urlPath: string,
	urlHash?: string
): ActiveMenuItemResult {
	const urlPathAndHash = urlPath + (urlHash ?? '');

	let activeMenu: TopLevelMenultem | undefined = undefined;
	let activeSubmenu: MenuItem | undefined = undefined;
	let path: MenuPath;

	for (const [idx, item] of menu.entries()) {
		if (item.href === urlPathAndHash) {
			path = [idx];
			activeMenu = item;
		}
		for (const [subIdx, subitem] of (item.submenu ?? []).entries()) {
			if (subitem.href === urlPathAndHash) {
				path = [idx, subIdx];
				activeSubmenu = subitem;
			}
		}
		if (activeMenu) {
			break;
		}
	}
	return { path, menu: activeMenu, submenu: activeSubmenu };
}
