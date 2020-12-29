import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    state = {  }

    render() { 
        return ( 
            <div className = "nav-bar">
                <h2 className="logo">MANGIME</h2>
                <ul className = "nav-links">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/anime">Top Anime</NavLink></li>
                    <li><NavLink to = "/manga">Top Manga</NavLink></li>
                    <li><NavLink to = "/anime-rec">Anime Recommendations</NavLink></li>
                    <li><NavLink to = "/manga-rec">Manga Recommendations</NavLink></li>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;