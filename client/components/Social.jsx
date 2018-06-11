import React, { Component } from 'react';
import SocialIcon from './SocialIcon.jsx';
import './Social.scss';

export default class Social extends Component {
    render() {
        const animationStart = this.props.animationStart;
        const animationDelayIteration = 0.15;

        const socialLinks = [
            { name: 'github', url: 'https://github.com/rasmuslelumees' },
            { name: 'dribbble', url: 'https://dribbble.com/rasmuslelumees' },
            { name: 'behance', url: 'https://www.behance.net/RasmusL' },
            { name: 'linkedin-in', url: 'https://www.linkedin.com/in/rasmuslelumees/' },
        ];

        return (
            <div className='more-info'>
                <div className='social-icons'>
                    {
                        socialLinks.map((link, i) => {
                            const delay = animationStart + animationDelayIteration * i;
                            return <SocialIcon name={link.name} url={link.url} delay={`${delay}s`}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}
