export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = ({ varient, message, autoDismiss }) => ({
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
