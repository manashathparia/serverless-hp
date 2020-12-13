import {
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION,
} from '../Actions/notification.actions';

const initial = [];

export default function notificationReducer(
    state = initial,
    { type, payload }
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
