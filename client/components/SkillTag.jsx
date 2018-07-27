import React, { Component } from 'react';
import './SkillTag.scss';

export default class SkillTag extends Component {
    render() {
        const styles = { animationDelay: this.props.delay };
        let className = 'skill-tag';
        if (this.props.help) className += ' skill-tag_withhelptext';

        return (
            <div className={className} style={styles}>
                <span>{this.props.name}</span>
                {
                    this.props.help && (
                        <div>
                            <div className='skill-tag__line'></div>
                            <div className='skill-tag__helptext'>
                                <div className='skill-tag__helptext-content'>{this.props.help}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
