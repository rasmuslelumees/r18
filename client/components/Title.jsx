import React, { Component } from 'react';
import './Title.scss';

export default class Title extends Component {
    render() {
        return <h1 className='main-title'>{this.props.text}</h1>;
    }
}
