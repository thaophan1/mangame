import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <h2 className = "logo">MANGIME</h2>
                <ul className = "nav-list">
                    <li className = "nav-link"><a href = "#">Top Anime</a></li>
                    <li className = "nav-link"><a href = "#">Top Manga</a></li>
                    <li className = "nav-link"><a href = "#">Anime Recommendations</a></li>
                    <li className = "nav-link"><a href = "#">Manga Recommendations</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;