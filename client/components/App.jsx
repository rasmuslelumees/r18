import React, { Component } from 'react';
import Arrow from './Arrow.jsx';
import Skills from './Skills.jsx';
import Divider from './Divider.jsx';
import Social from './Social.jsx';
import Title from './Title.jsx';
import './App.scss';
import '../favicon.ico';

export default class App extends Component {

    renderSlogan() {
        return (
            <p className='slogan'>
                <span className='slogan__fade'>My name is Rasmus Lelumees.</span>
                <div className='slogan__slide-wrap'>
                    <span className='slogan__slide'>I’m a <b>software engineer</b> and <b>designer</b>.</span>
                </div>
            </p>
        );
    }

    render() {
        return (
            <div className='container'>
                <Arrow animationStart={0} />
                <div className='content-wrap'>
                    <Title text='Hello' />
                    <Divider />
                    { this.renderSlogan() }
                    <Skills animationStart={2.5} />
                    <Social animationStart={3.8} />
                </div>
            </div>
        );
    }
}
