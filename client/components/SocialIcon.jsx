import React, { Component } from 'react';
import './SocialIcon.scss';

export default class SocialIcon extends Component {
    render() {
        const className = 'fab fa-' + this.props.name;
        const styles = { animationDelay: this.props.delay };
        return (
            <a
                target='_blank'
                href={this.props.url}
                className='social-icon'
                style={styles}
            >
                <i className={className}></i>
            </a>
        );
    }
}
