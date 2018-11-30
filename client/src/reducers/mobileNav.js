import {SHOW_MOBILE_NAV, DISMISS_BACKDROP} from "../actions/types";

const initalState = {
    display: false
};

const mobileNavReducer = (state = initalState, action) => {
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
}

export default mobileNavReducer;