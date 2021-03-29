import React, { Component } from 'react';
import TopAnimeCard from './TopAnimeCard';
import '../TopAnime.css'
import '../Card.css'

class TopAnime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topAnime: [],
            topAnimeUpcoming: [],
            topAnimeAiring: [],
            topAnimeMovies: [],
            isLoaded: false,
            anime: {
                end_date: "",
                episodes: 0,
                image_url: "",
                mal_id: 0,
                rank: 0,
                score: 0.0,
                start_date: "",
                title: ""
            },
            cardClicked: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleClick(anime) {
        this.setState({
            anime: anime,
            cardClicked: true
        })

        console.log(anime)
    }

    toggle() {
        this.setState({
            cardClicked: false
        })
    }

    componentDidMount() {
        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/anime/')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topAnime: json.top,
                })

                console.log(`Top Anime: ${this.state.topAnime}`)
            })

        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/anime/1/upcoming/')
        .then(result => result.json())
        .then((json) => {
            this.setState({
                topAnimeUpcoming: json.top,
            })

            console.log(`Upcoming Anime: ${this.state.topAnimeUpcoming}`)
        })

        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/anime/1/airing')
        .then(result => result.json())
        .then((json) => {
            this.setState({
                topAnimeAiring: json.top,
            })

            console.log(`Airing Anime: ${this.state.topAnime}`)
        })

        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/anime/1/movie')
        .then(result => result.json())
        .then((json) => {
            this.setState({
                topAnimeMovies: json.top,
                isLoaded: true
            })

            console.log(`Anime Movies: ${this.state.topAnimeMovies}`)
        })
    }

    render() { 
        const isLoaded = this.state.isLoaded;
        const topAnime = this.state.topAnime;
        const topAnimeUpcoming = this.state.topAnimeUpcoming;
        const topAnimeAiring = this.state.topAnimeAiring;
        const topAnimeMovies = this.state.topAnimeMovies;

        if (!isLoaded) {
            return <div className = "loader-wrapper">
                <div className = "loading">Loading...</div>
            </div> 
        }

        return ( 
            <div>
                <h1 className = "list-heading">Top Ranking Anime</h1>    
                {this.state.cardClicked ? <TopAnimeCard 
                                            anime = {this.state.anime}
                                            toggle = {this.toggle}
                                            type = "anime"/> : null}
                <ul className = "top-anime-list">
                    {topAnime.map((anime) => 
                        <li key = {anime.mal_id} className = "anime">
                            <a href = "#" onClick = {() => this.handleClick(anime)}>
                                <img className = "top-anime" src = {anime.image_url} alt = {anime.title} />
                            </a>
                        </li>
                    )}
                </ul>

                <h1 className = "list-heading">Upcoming Anime</h1>
                <ul className = "top-anime-list">
                    {topAnimeUpcoming.map((anime) => 
                        <li key = {anime.mal_id} className = "anime">
                            <a href = "#" onClick = {() => this.handleClick(anime)}>
                                <img className = "top-anime" src = {anime.image_url} alt = {anime.title} />
                            </a>
                        </li>
                    )}
                </ul>

                <h1 className = "list-heading">Airing Anime</h1>
                <ul className = "top-anime-list">
                    {topAnimeAiring.map((anime) => 
                        <li key = {anime.mal_id} className = "anime">
                            <a href = "#" onClick = {() => this.handleClick(anime)}>
                                <img className = "top-anime" src = {anime.image_url} alt = {anime.title} />
                            </a>
                        </li>
                    )}
                </ul>

                <h1 className = "list-heading">Top Anime Movies</h1>
                <ul className = "top-anime-list">
                    {topAnimeMovies.map((anime) => 
                        <li key = {anime.mal_id} className = "anime">
                            <a href = "#" onClick = {() => this.handleClick(anime)}>
                                <img className = "top-anime" src = {anime.image_url} alt = {anime.title} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
 
export default TopAnime;