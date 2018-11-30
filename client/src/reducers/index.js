import React from 'react';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import backdrop from './backdrop';
import mobileNav from './mobileNav';

export default combineReducers({
    backdrop,
    mobileNav,
    form: formReducer,
});