import React, { Component } from 'react';
import './TopAnime.css'

class TopAnime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topAnime: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/top/anime/')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topAnime: json.top,
                    isLoaded: true
                })

                // console.log(this.state.topAnime)
            });
    }

    render() { 
        const isLoaded = this.state.isLoaded;
        const topAnime = this.state.topAnime;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return ( 
            <div>
                top anime:
                <ul>
                    {topAnime.map(anime => 
                        <li key = {anime.mal_id}>{anime.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}
 
export default TopAnime;