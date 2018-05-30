import React, { Component } from 'react';
import './SocialIcon.scss';

export default class SocialIcon extends Component {
    render() {
        const className = 'fab fa-' + this.props.name;
        return (
            <a
                target='_blank'
                href={this.props.url}
                className='social-icon'
            >
                <i className={className}></i>
            </a>
        );
    }
}
