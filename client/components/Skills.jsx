import React, { Component } from 'react';
import SkillTag from './SkillTag.jsx';
import './Skills.scss';

export default class Skills extends Component {

    render() {
        const animationStart = this.props.animationStart;
        const animationDelayIteration = 0.1;

        const skills = [
            'Web development',
            'JavaScript',
            'React',
            'HTML',
            'CSS',
            'UI design',
            'Branding',
            'Full-stack development',
            'Node JS',
            'AWS'
        ];

        return (
            <div>
                <p className='skills__label'>What I think I'm good at</p>
                <div className='skills'>
                    {
                        skills.map((skill, i) => {
                            const delay = animationStart + animationDelayIteration * i;
                            return <SkillTag name={skill} delay={`${delay}s`} />
                        })
                    }
                </div>
            </div>
        );
    }
}
