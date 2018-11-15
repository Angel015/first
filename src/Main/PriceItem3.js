import React, {Component} from 'react';

class PriceItem3 extends Component {
    render() {
        return (
            <div>
                <div className="price_item">
                    <div className="price_top">
                        <div className="price_top_1">
                            <h5>$</h5>
                            <h4>59</h4>
                        </div>
                        <p>per month</p>
                    </div>
                    <div className="price_name">
                        <p>PREMIUM</p>
                    </div>
                    <div className="price_bottom">
                        <ul>
                            <li><p>30 Projects</p></li>
                            <li><p>2 GB Storage</p></li>
                            <li><p>Notification settings</p></li>
                            <li><p>Password protection</p></li>
                        </ul>
                    </div>
                    <button>BUY NOW</button>
                </div>
            </div>);
    }
}

export default PriceItem3;
