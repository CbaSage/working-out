import React, {Component} from 'react';
import {connect} from 'react-redux';

import {DISMISS_BACKDROP} from "../../../actions/types";
import classes from './BackDrop.module.css';

class Backdrop extends Component {
    render() {
        const displayStyle = {display: 'none'};

        if(this.props.shouldDisplay){
            displayStyle.display = 'block'
        }

        return (
            <div style={displayStyle} className={classes.backdrop} onClick={this.props.dismissBackdrop}>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shouldDisplay: state.backdrop.display
    };
}

function mapDispatchToProps(dispatch){
    return {
        dismissBackdrop: () => {
            return dispatch({type: DISMISS_BACKDROP});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);