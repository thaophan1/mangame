import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './TopAnimeCard.css'

class TopAnimeCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            currAnime: {
                status: "",
                synopsis: "",
                premiered: ""
            }
        }

        this.exitClicked = this.exitClicked.bind(this)
    }
    
    exitClicked() {
        this.props.toggle();
    }

    componentDidMount() {
        const url = encodeURI(`https://api.jikan.moe/v3/anime/${this.props.anime.mal_id}`)
        console.log(url)
        fetch(url)
        .then(result => result.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                currAnime: {
                    status: json.status,
                    synopsis: json.synopsis,
                    premiered: json.premiered
                }
            })

            console.log(json)
        })
    }

    render() {
        if (!this.state.isLoaded) {
            return <div className = "top-anime-card">
                <h1 className = "loading">Loading...</h1>
            </div>
        }

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
                <div className = "justify-content-sm-center row">
                    <img src = {this.props.anime.image_url} className = "cover col-11 col-sm-9 col-md-4 col-xl-3"/>
                    <h2 className = "stats col-12 col-sm-9 col-md-8 col-xl-9">
                        Ranked: #{this.props.anime.rank}
                        <hr />
                        Score: {this.props.anime.score}
                        <hr />
                        Episodes: {this.props.anime.episodes != {}? this.props.anime.episodes : "unknown"}
                        <hr />
                        Status: {this.state.currAnime.status}
                        <hr />
                        Premiered: {this.state.currAnime.premiered}
                    </h2>
                </div>
                <p className = "anime-description">
                    {this.state.currAnime.synopsis}
                </p>
            </div>
        );
    }
}
 
export default TopAnimeCard;