import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        this.setState(state => ({
            menu: !state.menu
        }))

        console.log(this.state.menu)
    }

    render() { 
        return ( 
            <>
                <div className = "nav-bar">
                    <h2 className="logo">MANGIME</h2>
                    <nav className = "nav-bar-desktop"> 
                        <ul className = "nav-links">
                            <li><NavLink to = "/">Home</NavLink></li>
                            <li><NavLink to = "/anime">Top Anime</NavLink></li>
                            <li><NavLink to = "/manga">Top Manga</NavLink></li>
                            <li><NavLink to = "/anime-rec">Anime Recommendations</NavLink></li>
                            <li><NavLink to = "/manga-rec">Manga Recommendations</NavLink></li>
                        </ul>
                    </nav>
                    <Link className = "hamburger">
                        <AiOutlineMenu onClick = {this.showMenu}/>
                    </Link>
                </div>

                <nav className = {this.state.menu ? "nav-bar-mobile active" : "nav-bar-mobile"}>
                    <ul className = "nav-links-mobile" onClick = {this.showMenu}>
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/anime">Top Anime</NavLink></li>
                        <li><NavLink to = "/manga">Top Manga</NavLink></li>
                        <li><NavLink to = "/anime-rec">Anime Recommendations</NavLink></li>
                        <li><NavLink to = "/manga-rec">Manga Recommendations</NavLink></li>
                    </ul>
                </nav>
            </>
        );
    }
}
 
export default NavBar;