import React, { Component } from 'react';

import ProfitItem from './ProfitItem'

class OurProfit extends Component {
    render() {
        return (
            <div className="profit">
                <ProfitItem/>
                <ProfitItem/>
                <ProfitItem/>
                <ProfitItem/>
                <ProfitItem/>
                <ProfitItem/>
            </div>
        );
    }
}
export default OurProfit;
