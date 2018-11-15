import React, { Component } from 'react';
import Services from "./Services";
import Quotes from "./Quotes";
import PriceList from "./PriceList";
import OurProfit from "./OurProfit";
import About from './About'
import JoinUs from "./JoinUs";
import News from "./News";

class Home extends Component {
    render() {
        return (
            <div>
                <About/>
                <Services/>
                <Quotes/>
                <PriceList/>
                <OurProfit/>
                <JoinUs/>
                <News/>
            </div>
        );
    }
}
export default Home;
