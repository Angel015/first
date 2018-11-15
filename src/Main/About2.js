import React, {Component} from 'react';
import AboutContent from './AboutContent';
import AboutImg from './AboutImg';
import "../sacc/App.css";
import TopNav from '../Header/TopNav'
import Footer from "../Footer/Footer";

class About extends Component {
    render() {
        return (
            <div>

                <div className="About">
                    <svg>
                        <polygon points="0,0 0,30 1000,0" width="100%" fill="#ed145b"/>
                    </svg>
                    <AboutContent/>
                    <AboutImg/>
                </div>

            </div>
        );
    }
}

export default About;
