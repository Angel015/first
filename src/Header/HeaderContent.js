import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HeaderContent extends Component {
    state={
        isOpen: false}

    handleClick = handleClick.bind(this);
    render() {
        // noinspection JSAnnotator
        const more= this.state.isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
        return (
            <div className="HederContent">
                <h1>Powerfull PSD template
                    available for free!
                </h1>
                <div className="border"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                <ReactCSSTransitionGroup
                    transitionName="text"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}>
                    {more}
                </ReactCSSTransitionGroup>
                <button onClick={this.handleClick}>Show more</button>
            </div>
        );
    }

}
 function handleClick() {
    console.log('---','clicked')
     this.setState({
     isOpen:!this.state.isOpen
     })
}
export default HeaderContent;
