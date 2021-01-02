import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './TopAnimeCard.css'

class TopAnimeCard extends Component {
    constructor(props) {
        super(props)

        this.exitClicked = this.exitClicked.bind(this)
    }
    
    exitClicked() {
        this.props.toggle();
    }

    render() {
        return (
            <div className = "top-anime-card">
                <div className = "header">
                    <h1 className = "title">
                        {this.props.anime.title}
                    </h1>
                    <Link>
                        <AiOutlineCloseCircle className = "exit" onClick = {this.exitClicked}/>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default TopAnimeCard;