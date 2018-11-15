import React, { Component } from 'react';
import AboutButton from "./AboutButton";

class AboutContent extends Component {
    render() {
        return (
            <div  className="About_content">
                <h1>Powerfull PSD template
                    available for free!
                </h1>
                <div className="border"> </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                <AboutButton/>
            </div>
        );
    }
}
export default AboutContent;
