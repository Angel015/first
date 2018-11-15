import React, {Component} from 'react';
import img21 from '../img/21.png'

class NewsItem extends Component {
    render() {
        return (
            <div className="news_box">
                <div className="news_img">
                    <img src={img21} alt=""/>
                </div>
                <svg>
                    <polygon points="0,0 0,10 360,10" width= "100%" fill="#ed145b"/>
                </svg>
                <div className="news_text">
                    <h6>LOREM IPSUMa DOLOR SIT</h6>
                    <p>Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
                </div>
            </div>
        );
    }
}
export default NewsItem;
