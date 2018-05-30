import React, { Component } from 'react';
import './SkillTag.scss';

export default class SkillTag extends Component {
    render() {
        return <div className='skill-tag'>{this.props.name}</div>;
    }
}
