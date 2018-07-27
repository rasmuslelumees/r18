import React, { Component } from 'react';
import './Slogan.scss';

export default class Slogan extends Component {

    render() {
        return (
            <p className='slogan'>
                <span className='slogan__fade'>My name is Rasmus Lelumees.</span>
                <div className='slogan__slide-wrap'>
                    <span className='slogan__slide'>I’m a <b>software engineer</b> and <b>designer</b>.</span>
                </div>
            </p>
        );
    }
}
