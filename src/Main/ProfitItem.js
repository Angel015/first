import React, { Component } from 'react';
import img12 from  '../img/12.png'

class ProfitItem extends Component {
    render() {
        return (
            <div className="profit_box">
                <div className="profit_img">
                    <img src={img12} alt="ddd"/>
                </div>
                <div className="profit_text">
                    <h6>PHOTOGRAPHY</h6>
                    <p>Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                        magna aliqua. Ut </p>
                </div>

            </div>
        );
    }
}
export default ProfitItem;
