export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

interface NotificationProps {
	varient: "success" | "error" | "info";
	message: string;
	autoDismiss?: boolean;
}

export const addNotification = ({
	varient,
	message,
	autoDismiss,
}: NotificationProps) => ({
	type: ADD_NOTIFICATION,
	payload: {
		varient,
		message,
		autoDismiss,
	},
});
export function removeNotification() {
	return {
		type: REMOVE_NOTIFICATION,
	};
}
