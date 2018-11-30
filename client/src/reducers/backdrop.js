import {SHOW_MOBILE_NAV, HIDE_MOBILE_NAV, DISMISS_BACKDROP} from "../actions/types";

const initalState = {
    display: false
};

const backdropReducer = (state = initalState, action) => {
    switch (action.type) {
        case SHOW_MOBILE_NAV:
            return {
                ...state,
                display: true
            };
        case DISMISS_BACKDROP:
            return {
                ...state,
                display: false
            };
        default:
            return state;
    }
};

export default backdropReducer;