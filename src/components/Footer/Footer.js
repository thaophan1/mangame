import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "footer">
                <div className = "title">Connect Socially With Me</div>
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
                <ul className = "names">
                    <li className = "name"> 
                        Connect on LinkedIn
                    </li>
                    <li className = "name"> 
                        Other Projects
                    </li>
                    <li className = "name"> 
                        Follow on Instagram
                    </li>
                    <li className = "name"> 
                        Follow this Playlist
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Footer;