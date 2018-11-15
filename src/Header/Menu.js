import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <Link to='/'>Home</Link>
                <Link to='/about' >About us</Link>
                <Link to='/ourprofit'>Profits</Link>
                <Link to='/prices'>Prices</Link>
                <Link to='/contsct'>Contact</Link>
            </div>
        );
    }
}
export default Menu;
