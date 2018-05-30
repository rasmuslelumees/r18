import React from 'react';
import './App.scss';

export default class App extends React.Component {
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
                        <div className='skills__tag'>Web development</div>
                        <div className='skills__tag'>JavaScript</div>
                        <div className='skills__tag'>React</div>
                        <div className='skills__tag'>HTML</div>
                        <div className='skills__tag'>CSS</div>
                        <div className='skills__tag'>UI design</div>
                        <div className='skills__tag'>Branding</div>
                        <div className='skills__tag'>Full-stack development</div>
                        <div className='skills__tag'>Node JS</div>
                        <div className='skills__tag'>AWS</div>
                    </div>
                    <div className='more-info'>
                        <p className='more-info__label'>More info & work</p>
                        <div className='social-icons'>
                            <a href='#' className='social-icons__icon'><i className='fab fa-behance'></i></a>
                            <a href='#' className='social-icons__icon'><i className='fab fa-dribbble'></i></a>
                            <a href='#' className='social-icons__icon'><i className='fab fa-linkedin-in'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
