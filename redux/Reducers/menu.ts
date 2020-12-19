import { UPDATE_MENU_ITEMS } from "../Actions/menus.actions";

const initial = {
	primary: [
		{
			ID: 1,
			title: "Home",
			url: "/",
			children: false,
		},
		{
			ID: 2,
			title: "Installation Guides",
			url: "/category/installation-guide/",
			children: false,
		},
		{
			ID: 3,
			title: "Bug fixing Guides",
			url: "/category/post-install-guides/",
			children: false,
		},
		{
			ID: 4,
			title: "Downloads",
			url: "/category/downloads/",
			children: false,
		},
	], // header menu
	secondary: [
		{ title: "Contact Us", url: "/page/contact-us", id: 1 },
		{ title: "About Us", url: "/page/about-us", id: 2 },
		{ title: "Privacy Policy", url: "/page/privacy-policy", id: 3 },
	], // footer menu
};

export default function menusReducer(
	state = initial,
	{ type, payload }: { type: any; payload: any }
) {
	switch (type) {
		case UPDATE_MENU_ITEMS:
			return payload;
		default:
			return state;
	}
}
