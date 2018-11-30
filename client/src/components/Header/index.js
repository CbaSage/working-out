import React, {Component} from 'react';
import {connect} from 'react-redux';

import {showMobileNav} from "../../actions/mobileNav";

import DesktopNav from '../Nav/DesktopNav'
import classes from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={classes.header}>
                <button className={classes.hamburger} onClick={this.props.showMobileNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                {/*<DesktopNav />*/}
            </header>
        );
    }
}

export default connect(null, {showMobileNav})(Header);