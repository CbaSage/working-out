import React from 'react';

import {Link} from 'react-router-dom';

const navItems = (props) => (
    <React.Fragment>
        <li>
            <Link to="max-rep-calculator">Max Rep Calculator</Link>
        </li>
        <li>
            <Link to="/">
                Test
            </Link>
        </li>
    </React.Fragment>
);

export default navItems;