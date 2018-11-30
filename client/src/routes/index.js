import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

import lazyComponentWrapper from '../utils/lazyComponentWrapper';

const Landing = lazy(() => import('../components/Landing/'));
const MaxRepCalculator = lazy(() => import('../components/MaxRepCalculator'));
const Profile = lazy(() => import('../components/Profile'));

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={lazyComponentWrapper(Landing)} />
            <Route path="/max-rep-calculator" component={lazyComponentWrapper(MaxRepCalculator)} />
            <Route path="/my-profile" component={lazyComponentWrapper(Profile)} />
        </Switch>
    );
}

export default routes;