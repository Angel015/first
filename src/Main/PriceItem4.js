import React, {Component} from 'react';

class PriceItem4 extends Component {
    render() {
        return (
            <div>
                <div className="price_item">
                    <div className="price_top">
                        <div className="price_top_1">
                            <h5>$</h5>
                            <h4>99</h4>
                        </div>
                        <p>per month</p>
                    </div>
                    <div className="price_name">
                        <p>UMLIMITED</p>
                    </div>
                    <div className="price_bottom">
                        <ul>
                            <li><p>Unlimited Projects</p></li>
                            <li><p>Unlimited Storage</p></li>
                            <li><p>Notification settings</p></li>
                            <li><p>Password protection</p></li>
                        </ul>
                    </div>
                    <button>BUY NOW</button>
                </div>
            </div>);
    }
}

export default PriceItem4;
