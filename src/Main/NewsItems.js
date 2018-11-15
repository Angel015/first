import React, {Component} from 'react';
import NewsItem from './NewsItem'

class NewsItems extends Component {
    render() {
        return (
            <div className="news_grid">
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>

            </div>
        );
    }
}
export default NewsItems;
