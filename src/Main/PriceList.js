import React, { Component } from 'react';
import  PriceContent from './PriceContent'
import  PriceItems from './PriceItems'

class PriceList extends Component {
    render() {
        return (
            <div className="price">
                <PriceContent/>
                <PriceItems/>
            </div>
        );
    }
}
export default PriceList;
