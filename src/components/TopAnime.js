import React, { Component } from 'react';
import './TopAnime.css'

class TopAnime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topAnime: [],
            isLoaded: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("clicked")
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
            return <div>Loading...</div>
        }

        return ( 
            <div className = "container-fluid">
                <h1 className = "row heading">Top Anime</h1>    

                <div>
                    <ul className = "row top-anime-list">
                        {topAnime.map(anime => 
                            <li key = {anime.mal_id} className = "col-6 col-md-4 col-lg-3 col-xl-2">
                                <a href = "#" onClick = {this.handleClick}>
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