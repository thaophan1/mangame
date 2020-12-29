import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    state = {  }

    render() { 
        return ( 
            <div className = "nav-bar">
                <h2 className="logo">MANGIME</h2>
                <ul className = "nav-links">
                    <li><a href = "#">Top Anime</a></li>
                    <li><a href = "#">Top Manga</a></li>
                    <li><a href = "#">Anime Recommendations</a></li>
                    <li><a href = "#">Manga Recommendations</a></li>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;