import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import About from "./About";
import Home from './Home.js';
import OurProfit from "./OurProfit";
import PriceList from "./PriceList";
import News from "./News";

const Main = () => <main>
    <Switch>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/ourprofit' component={OurProfit}/>
        <Route path='/prices' component={PriceList}/>
        <Route path='/contsct' component={News}/>
    </Switch>
</main>;

export default Main;
