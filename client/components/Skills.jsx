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
                help: 'My favourite UI library for the past years, finds usage both in production systems and various side projects'
            },
            {
                name: 'Redux',
                help: 'The predictable state container for more complex JS apps which I often use in my React applications'
            },
            {
                name: 'Node JS',
                help: 'I\'ve been creating back-end (micro)services in Node JS runtime for the past 4 years (and counting)'
            },
            {
                name: 'UI design',
                help: '3 years of crafting user interfaces as a freelancer, using the best UX practices and lots of passion for great design'
            },
            {
                name: 'AWS',
                help: '3 years of building serverless solutions using ECS, EC2, S3, CloudFormation, Lambda, RDS etc.'
            },
            {
                name: 'Java',
                help: 'Although not actively used in my latest projects, Java used to be my first choice for backend solutions for many years'
            },
            {
                name: 'MySQL',
                help: 'Despite new and awesome noSQL options on the market, MySQL still is the most used relational database in my projects'
            },
            {
                name: 'Git',
                help: 'The go-to version control system for many software engineers for the past 5+ years, including myself'
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
