import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Review from '../Review';
import '../Card.css'

class TopAnimeCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            currAnime: {
                status: "",
                synopsis: "",
                premiered: ""
            },
            reviews: []
        }

        this.exitClicked = this.exitClicked.bind(this)
    }
    
    exitClicked() {
        this.props.toggle();
    }

    componentDidMount() {
        const animeURL = encodeURI(`https://api.jikan.moe/v3/anime/${this.props.anime.mal_id}`)
        console.log(animeURL)
        fetch(animeURL)
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

        const reviewsURL = animeURL + "/reviews"
        console.log(reviewsURL)
        fetch(reviewsURL)
        .then(result => result.json())
        .then(json => {
            this.setState({
                reviews: json.reviews
            })

            console.log(this.state.reviews)
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
                        Episodes: {this.props.anime.episodes != {}? this.props.anime.episodes : "Unknown"}
                        <hr />
                        Status: {this.state.currAnime.status}
                        <hr />
                        Premiered: {this.state.currAnime.premiered == null? "Unknown" : this.state.currAnime.premiered}
                    </h2>
                </div>
                <p className = "anime-description">
                    {this.state.currAnime.synopsis}
                </p>
                <h2 className = "title">Reviews</h2>
                <div className = "reviews-list">
                    {this.state.reviews.map(currReview =>
                        <Review review = {currReview}
                                type = "anime"/>
                    )}
                </div>
            </div>
        );
    }
}
 
export default TopAnimeCard;