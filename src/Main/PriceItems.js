import React, {Component} from 'react';
import PriceItem from './PriceItem'
import  PriceItem2 from './PriceItem2'
import  PriceItem3 from './PriceItem3'
import  PriceItem4 from './PriceItem4'



class PriceItems extends Component {
    render() {
        return (
            <div className="price_items">
                <PriceItem/>
                <PriceItem2/>
                <PriceItem3/>
                <PriceItem4/>
            </div>);
    }
}

export default PriceItems;
