import React, { Component } from 'react';
import SocialIcon from './SocialIcon.jsx';
import SkillTag from './SkillTag.jsx';
import './App.scss';
import '../favicon.ico';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='arrow'></div>
                <div className='content-wrap'>
                    <h1 className='main-title'>Hello</h1>
                    <div className='divider'></div>
                    <p className='slogan'>My name is Rasmus Lelumees. I’m a <span className='bold'>designer</span> and <span className='bold'>software engineer</span>.</p>
                    <p className='slogan'>What I think I'm good at</p>
                    <div className='skills'>
                        <SkillTag name='Web development'/>
                        <SkillTag name='JavaScript'/>
                        <SkillTag name='React'/>
                        <SkillTag name='HTML'/>
                        <SkillTag name='CSS'/>
                        <SkillTag name='UI design'/>
                        <SkillTag name='Branding'/>
                        <SkillTag name='Full-stack development'/>
                        <SkillTag name='Node JS'/>
                        <SkillTag name='AWS'/>
                    </div>
                    <div className='more-info'>
                        <p className='more-info__label'>More info & work</p>
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
