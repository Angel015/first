import React, { Component } from 'react';
import  ServicesContent from './ServicesContent'
import  ServicesItems from './ServicesItems'



class Services extends Component {
    render() {
        return (
            <div className="servise">
                <ServicesContent/>
                <ServicesItems/>
            </div>
        );
    }
}
export default Services;
