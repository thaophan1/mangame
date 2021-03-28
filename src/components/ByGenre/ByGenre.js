import React, { Component } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi'
import './ByGenre.css'

class ByGenre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topGenreAnime: [],
            topGenreManga: [],
            chosenGenre: null,
            isLoaded: false
        }

        this.genreClick = this.genreClick.bind(this)
    }

    genreClick(genre) {
        this.setState({
            chosenGenre: genre
        })

        fetch(`https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/genre/anime/${genre.genreID}`)
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topGenreAnime: json.anime,
                })

                console.log(`Anime: ${this.state.topGenreAnime}`)
            })

        fetch(`https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/genre/manga/${genre.genreID}`)
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topGenreManga: json.manga,
                    isLoaded: true
                })

                console.log(`Manga: ${this.state.topGenreManga}`)
            })
    }

    render() { 
        let genres = require('./GenreArray.js')
        
        return ( 
        <div className = "genre-page">
            <div className = "heading">Get Recommendations Based on Genre</div>
            <ul className = "genre-list">
                {genres.map((genre) => 
                    <li key = {genre.genreID} className = "genre-button" onClick = {() => this.genreClick(genre)}>
                        {genre.genreName}
                    </li>)
                }
            </ul>
        </div> );
    }
}
 
export default ByGenre;