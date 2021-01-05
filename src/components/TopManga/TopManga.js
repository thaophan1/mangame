import React, { Component } from 'react';
import TopMangaCard from './TopMangaCard';
import'../TopAnime.css';


class TopManga extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topManga: [],
            isLoaded: false,
            manga: {
                mal_id: 0,
                rank: 0,
                title: "",
                volumes: 0,
                start_date: "",
                end_date: "",
                score: 0,
                image_url: ""
            },
            cardClicked: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleClick(manga) {
        this.setState({
            manga: manga,
            cardClicked: true
        })

        console.log(manga)
    }

    toggle() {
        this.setState({
            cardClicked: false
        })
    }

    componentDidMount() {
        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/manga/')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topManga: json.top,
                    isLoaded: true
                })

                console.log(this.state.topManga)
            });
    }

    render() { 
        const isLoaded = this.state.isLoaded;
        const topManga = this.state.topManga;

        if (!isLoaded) {
            return <h1 className = "loading">Loading...</h1>
        }

        return ( 
            <div className = "container-fluid">
                <h1 className = "row heading">Top Manga</h1>    

                <div className = "top-manga-div">
                    {this.state.cardClicked ? <TopMangaCard 
                                                manga = {this.state.manga}
                                                toggle = {this.toggle}
                                                /> : null}
                    <ul className = "top-manga-list">
                        {topManga.map((manga) => 
                            <li key = {manga.mal_id} className = "col-6 col-md-4 col-lg-3 col-xl-2">
                                <a href = "#" onClick = {() => this.handleClick(manga)}>
                                    <img className = "top-manga" src = {manga.image_url} alt = {manga.title} />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default TopManga;