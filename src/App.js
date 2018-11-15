import React, {Component} from 'react';
import "./sacc/App.css";
import "../node_modules/video-react/dist/video-react.css";
import Header from './Header/Header.js';
import Main from './Main/Main.js' ;
import Footer from './Footer/Footer.js';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default App;
