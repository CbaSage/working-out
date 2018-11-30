import React from 'react';

import classes from './Main.module.css';

const main = (props) => (
    <section className={classes.main}>
        {props.children}
    </section>
);

export default main;