import React, { Component } from 'react';

import NewsItems from './NewsItems'
import  NewsContent from './NewsContent'

class News extends Component {
    render() {
        return (
            <div className="news">
                <NewsContent/>
                <NewsItems/>

            </div>
        );
    }
}
export default News;
