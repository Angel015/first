import React, {Component} from 'react';
import {Player} from 'video-react';
import video1 from '../video/111.mp4'

class AboutImg extends Component {
    render() {
        return (
            <div className="About_img">
                <div className="About_img_vid">
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={video1}
                    />
                </div>
            </div>
        );
    }
}

export default AboutImg;
