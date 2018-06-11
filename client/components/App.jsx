import React, { Component } from 'react';
import SocialIcon from './SocialIcon.jsx';
import Skills from './Skills.jsx';
import Divider from './Divider.jsx';
import './App.scss';
import '../favicon.ico';

export default class App extends Component {

    renderTitle() {
        return <h1 className='main-title'>Hello</h1>;
    }

    renderSlogan() {
        return (
            <p className='slogan'>
                <span className='slogan__fade'>My name is Rasmus Lelumees.</span>
                <div className='slogan__slide-wrap'>
                    <span className='slogan__slide'>I’m a <b>designer</b> and <b>software engineer</b>.</span>
                </div>
            </p>
        );
    }

    render() {
        return (
            <div className='container'>
                <div className='arrow'></div>
                <div className='content-wrap'>
                    { this.renderTitle() }
                    <Divider />
                    { this.renderSlogan() }
                    <Skills animationStart={2.5} />
                    <div className='more-info'>
                        <div className='social-icons'>
                            <SocialIcon name='github' url='https://github.com/rasmuslelumees'/>
                            <SocialIcon name='dribbble' url='https://dribbble.com/rasmuslelumees'/>
                            <SocialIcon name='behance' url='https://www.behance.net/RasmusL'/>
                            <SocialIcon name='linkedin-in' url='https://www.linkedin.com/in/rasmuslelumees/'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
