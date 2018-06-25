import React, { Component } from 'react';
import SkillTag from './SkillTag.jsx';
import './Skills.scss';

export default class Skills extends Component {

    render() {
        const animationStart = this.props.animationStart;
        const animationDelayIteration = 0.1;

        const skills = [
            {
                name: 'Web development',
                help: '7+ years of creating web solutions for different mediums & platforms, using HTML, (preprocessed) CSS and JS'
            },
            {
                name: 'React',
                help: 'Probably my favourite UI library since 2015, finds usage both in production systems and various side projects'
            },
            {
                name: 'UI design',
                help: '3 years of crafting user interfaces as a freelancer, using the best UX practices and lots of passion for great design'
            },
            {
                name: 'Branding'
            },
            {
                name: 'Full-stack development'
            },
            {
                name: 'Node JS',
                help: 'My preferred language for creating back-end (micro)services for the past 4 years (and counting)'
            },
            {
                name: 'AWS',
                help: '3+ years of building production solutions using ECS, EC2, S3, CloudFormation, Lambda, RDS etc.'
            }
        ];

        return (
            <div>
                <p className='skills__label'>What I think I'm good at</p>
                <div className='skills'>
                    {
                        skills.map((skill, i) => {
                            const delay = animationStart + animationDelayIteration * i;
                            return <SkillTag name={skill.name} help={skill.help} delay={`${delay}s`} />
                        })
                    }
                </div>
            </div>
        );
    }
}
