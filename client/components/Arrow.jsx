import React, { Component } from 'react';
import './Arrow.scss';

export default class Arrow extends Component {
    render() {
        const styles = { animationDelay: this.props.animationStart };
        return <div className='arrow' style={styles}></div>;
    }
}
