import {
	ADD_NOTIFICATION,
	REMOVE_NOTIFICATION,
} from "../Actions/notification.actions";

const initial: [any] | [] = [];

export default function notificationReducer(
	state = initial,
	{ type, payload }: { type: any; payload: any }
) {
	switch (type) {
		case ADD_NOTIFICATION:
			return [payload];
		case REMOVE_NOTIFICATION:
			return initial;
		default:
			return state;
	}
}
