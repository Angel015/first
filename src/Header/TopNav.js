import React, { Component } from 'react';
import Logo from './Logo.js'
import Menu from './Menu.js'

class TopNav extends Component {
    render() {
        return (
            <div className="TopNav">
                <Logo/>
                <Menu/>
            </div>
        );
    }
}
export default TopNav;
