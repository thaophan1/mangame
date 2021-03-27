import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "footer">
                <div className = "title">Connect With Me</div>
                <ul className = "icons">
                    <li>
                        <a href = "https://www.linkedin.com/in/thao-phan-b20901172/" target = "blank">
                            <img className = "icon" src = "/images/linkedin.webp"></img>
                        </a>
                    </li>

                    <li>
                        <a href = "https://github.com/thaophan1" target = "blank">
                            <img className = "icon" src = "/images/GitHub-Mark-120px-plus.png"></img>
                        </a>
                    </li>

                    <li>
                        <a href = "https://www.instagram.com/thaotphann/?hl=en" target = "blank">
                            <img className = "icon" src = "/images/instagram.png"></img>
                        </a>
                    </li>

                    <li>
                        <a href = "https://open.spotify.com/playlist/0wyrDRLgWprOE0PpLCGikL?si=cab996d317f44067" target = "blank">
                            <img className = "icon" src = "/images/spotify.png"></img>
                        </a>
                    </li>
                </ul>
                <div className = "credit">Designed by Thao Phan</div>
                <div className = "credit" style = {{fontSize: 14}}>Contact me at <em>thaophan000@gmail.com</em></div>
            </div>
        );
    }
}
 
export default Footer;