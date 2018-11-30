import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './MobileNav.module.css';
import NavItems from '../NavItems'

class MobileNav extends Component {
    render() {
        const displayStyle = {display: 'none'};

        if(this.props.shouldDisplay){
            displayStyle.display = 'block'
        }

        return (
            <nav style={displayStyle} className={classes.mobilNav}>
                <NavItems />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        shouldDisplay: state.mobileNav.display
    };
}

export default connect(mapStateToProps)(MobileNav);