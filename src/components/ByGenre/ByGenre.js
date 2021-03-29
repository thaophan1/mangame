import React, { Component } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi'
import TopAnimeCard from '../TopAnime/TopAnimeCard';
import './ByGenre.css'
import '../TopAnime.css'
import '../Card.css'

class ByGenre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topGenreTitles: [],
            chosenGenre: null,
            chosenTitle: null,
            isLoaded: false
        }

        this.genreClick = this.genreClick.bind(this)
        this.backClick = this.backClick.bind(this)
        this.loadTitle = this.loadTitle.bind(this)
        this.exitCard = this.exitCard.bind(this)
    }

    genreClick(genre) {
        this.setState({
            chosenGenre: genre
        })

        fetch(`https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/genre/anime/${genre.genreID}`)
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topGenreTitles: json.anime,
                    isLoaded: true
                })
                
                console.log(`Anime: ${this.state.topGenreTitles}`)
            })
    }

    backClick() {
        this.setState({
            chosenGenre: null,
            topGenreTitles: [],
            topGenreManga: [],
            isLoaded: false,
        })
    }

    loadTitle(title) {
        this.setState({
            chosenTitle: title
        })
    }

    exitCard() {
        this.setState({
            chosenTitle: null
        })
    }

    render() { 
        let genres = require('./GenreArray.js')
        let chosenGenre = this.state.chosenGenre
        let topGenreTitles = this.state.topGenreTitles
        let topGenreManga = this.state.topGenreManga
        let isLoaded = this.state.isLoaded
        
        if (chosenGenre == null) {
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

        else {

            if (!isLoaded) {
                return <div className = "loader-wrapper">
                    <div className = "loading">Loading...</div>
                </div> 
            }

            return (
                <div className = "genre-page">
                    {this.state.chosenTitle != null? <TopAnimeCard 
                                                       anime = {this.state.chosenTitle} 
                                                       toggle = {this.exitCard} 
                                                       type = "anime"/> : null}
                    <FiArrowLeftCircle className = "back-arrow" onClick = {this.backClick}/>
                    <h1 className = "heading">Top {chosenGenre.genreName} Titles</h1>
                    <ul className = "top-anime-list wrap no-padding center">
                        {topGenreTitles.map((anime) =>
                            <li key = {anime.mal_id} className = "anime">
                                <img className = "top-anime" src = {anime.image_url} alt = {anime.title} onClick = {() => this.loadTitle(anime)}/>
                            </li>)
                        }
                    </ul>
                </div>
            );
        }
    }
}
 
export default ByGenre;