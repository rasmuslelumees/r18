import React, { Component } from 'react';
import Arrow from './Arrow.jsx';
import Skills from './Skills.jsx';
import Divider from './Divider.jsx';
import Social from './Social.jsx';
import Slogan from './Slogan.jsx';
import Title from './Title.jsx';
import './App.scss';
import '../favicon.ico';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Arrow animationStart={0} />
                <div className='content-wrap'>
                    <Title text='Hello' />
                    <Divider />
                    <Slogan />
                    <Skills animationStart={2.5} />
                    <Social animationStart={3.8} />
                </div>
            </div>
        );
    }
}
