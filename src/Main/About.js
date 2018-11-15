import React, { Component } from 'react';
import AboutContent from './AboutContent';
import AboutImg from './AboutImg';
class About extends Component {
    render() {
        return (
            <div className="About">
                <svg>
                    <polygon points="0,0 0,30 1000,0" width= "100%" fill="#ed145b"/>
                </svg>
                <AboutContent/>
                <AboutImg/>

            </div>
        );
    }
}
export default About;
