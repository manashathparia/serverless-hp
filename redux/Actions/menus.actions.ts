export const UPDATE_MENU_ITEMS = "UPDATE_MENU_ITEMS";

export const updateMenuItems = (menus: [any]) => ({
	type: UPDATE_MENU_ITEMS,
	payload: menus,
});
