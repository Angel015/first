import React, { Component } from 'react';
import TopNav from './TopNav.js'
import HeaderContent from './HeaderContent.js'
class Header extends Component {
    render() {
        return (
         <div className="Header">
            <TopNav/>
             <HeaderContent/>
         </div>
        );
    }
}
export default Header;
