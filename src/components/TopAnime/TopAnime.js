import React, { Component } from 'react';
import TopAnimeCard from './TopAnimeCard';
import './TopAnime.css'

class TopAnime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topAnime: [],
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
        fetch('https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/top/anime/')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topAnime: json.top,
                    isLoaded: true
                })

                console.log(this.state.topAnime)
            });
    }

    render() { 
        const isLoaded = this.state.isLoaded;
        const topAnime = this.state.topAnime;

        if (!isLoaded) {
            return <h1 className = "loading">Loading...</h1>
        }

        return ( 
            <div className = "container-fluid">
                <h1 className = "row heading">Top Anime</h1>    

                <div className = "top-anime-div">
                    {this.state.cardClicked ? <TopAnimeCard 
                                                anime = {this.state.anime}
                                                toggle = {this.toggle}/> : null}
                    <ul className = "top-anime-list">
                        {topAnime.map((anime) => 
                            <li key = {anime.mal_id} className = "col-6 col-md-4 col-lg-3 col-xl-2">
                                <a href = "#" onClick = {() => this.handleClick(anime)}>
                                    <img className = "top-anime" src = {anime.image_url} alt = {anime.title} />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default TopAnime;