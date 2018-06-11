import React, { Component } from 'react';
import './SkillTag.scss';

export default class SkillTag extends Component {
    render() {
        const styles = { animationDelay: this.props.delay };
        return <div className='skill-tag' style={styles}>{this.props.name}</div>;
    }
}
