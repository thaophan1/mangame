import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Review from './MangaReview';
import '../Card.css'

class TopMangaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            currManga: {
                status: "",
                synopsis: "",
            },
            reviews: []
        }

        this.exitClicked = this.exitClicked.bind(this)
    }
    
    exitClicked() {
        this.props.toggle();
    }

    componentDidMount() {
        const mangaURL = encodeURI(`https://api.jikan.moe/v3/manga/${this.props.manga.mal_id}`)
        console.log(mangaURL)
        fetch(mangaURL)
        .then(result => result.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                currManga: {
                    status: json.status,
                    synopsis: json.synopsis,
                }
            })

            console.log(json)
        })

        const reviewsURL = encodeURI(mangaURL + "/reviews");
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
                        {this.props.manga.title}
                    </h1>
                    <Link>
                        <AiOutlineCloseCircle className = "exit" onClick = {this.exitClicked}/>
                    </Link>
                </div>
                <div className = "justify-content-sm-center row">
                    <img src = {this.props.manga.image_url} className = "cover col-11 col-sm-9 col-md-4 col-xl-3"/>
                    <h2 className = "stats col-12 col-sm-9 col-md-8 col-xl-9">
                        Ranked: #{this.props.manga.rank}
                        <hr />
                        Score: {this.props.manga.score}
                        <hr />
                        Volumes: {this.props.manga.volumes != null? this.props.manga.volumes : "Unknown"}
                        <hr />
                        Status: {this.state.currManga.status}
                    </h2>
                </div>
                <p className = "anime-description">
                    {this.state.currManga.synopsis}
                </p>
                <h1 className = "title">Reviews <br/></h1>
                <div className = "reviews-list">
                    {this.state.reviews.map(currReview => 
                        <Review review = {currReview}/>
                    )}
                </div>
            </div>
        );
    }
}
 
export default TopMangaCard;