import React, { Component } from 'react';
import './ByGenre.css'

class ByGenre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topGenreAnime: [],
            topGenreManga: [],
            isLoaded: false
        }
    }

    render() { 
        let genres = require('./GenreArray.js')
        
        return ( 
        <div className = "genre-page">
            <div className = "heading">Get Recommendations Based on Genre</div>
            <ul className = "genre-list">
                {genres.map((genre) => 
                    <li key = {genre.genreID} className = "genre-button">
                        {genre.genreName}
                    </li>)
                }
            </ul>
        </div> );
    }
}
 
export default ByGenre;