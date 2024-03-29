import {
	TOGGLE_DARK_MODE,
	DARK_MODE_RAN,
} from "../Actions/preferences.actions";

const initial = {
	darkMode: true,
	darkModeRan: false,
	cdn: "",
};

export default function (state = initial, { type }: { type: string }) {
	switch (type) {
		case TOGGLE_DARK_MODE:
			return { ...state, darkMode: !state.darkMode, darkModeRan: true };

		case DARK_MODE_RAN:
			return { ...state, darkModeRan: true };
		default:
			return state;
	}
}
