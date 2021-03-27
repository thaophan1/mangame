import React, { Component } from 'react';
import TopMangaCard from './TopMangaCard';
import '../TopAnime.css';
import '../Card.css'


class TopManga extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topManga: [],
            topManhwa: [],
            topNovels: [],
            topOneShots: [],
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
                })

                console.log(`Top Manga: ${this.state.topManga}`)
            });
        
        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/manga/1/manhwa')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topManhwa: json.top,
                })

                console.log(`Top Manhwa: ${this.state.topManhwa}`)
            });

        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/manga/1/novels')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topNovels: json.top,
                })

                console.log(`Top Manhua: ${this.state.topNovels}`)
            });

        fetch('https://infinite-coast-32217.herokuapp.com/https://api.jikan.moe/v3/top/manga/1/oneshots')
            .then(result => result.json())
            .then((json) => {
                this.setState({
                    topOneShots: json.top,
                    isLoaded: true
                })

                console.log(`Top Doujin: ${this.state.topOneShots}`)
            });
    }

    render() { 
        const isLoaded = this.state.isLoaded;
        const topManga = this.state.topManga;
        const topNovels = this.state.topNovels;
        const topManhwa = this.state.topManhwa;
        const topOneShots = this.state.topOneShots;

        if (!isLoaded) {
            return <div className = "loader-wrapper">
                <div className = "loading">Loading...</div>
            </div> 
        }

        return ( 
            <div className = "container-fluid">

                <div className = "top-manga-div">
                    {this.state.cardClicked ? <TopMangaCard 
                                                manga = {this.state.manga}
                                                toggle = {this.toggle}
                                                /> : null}
                    
                    <h1 className = "heading">Top Manga</h1>    
                    <ul className = "top-manga-list">
                        {topManga.map((manga) => 
                            <li key = {manga.mal_id} className = "manga">
                                <a href = "#" onClick = {() => this.handleClick(manga)}>
                                    <img className = "top-manga" src = {manga.image_url} alt = {manga.title} />
                                </a>
                            </li>
                        )}
                    </ul>

                    <h1 className = "heading">Top Novels</h1>    
                    <ul className = "top-manga-list">
                        {topNovels.map((novel) => 
                            <li key = {novel.mal_id} className = "manga">
                                <a href = "#" onClick = {() => this.handleClick(novel)}>
                                    <img className = "top-manga" src = {novel.image_url} alt = {novel.title} />
                                </a>
                            </li>
                        )}
                    </ul>

                    <h1 className = "heading">Top Manhwa</h1>    
                    <ul className = "top-manga-list">
                        {topManhwa.map((manhwa) => 
                            <li key = {manhwa.mal_id} className = "manga">
                                <a href = "#" onClick = {() => this.handleClick(manhwa)}>
                                    <img className = "top-manga" src = {manhwa.image_url} alt = {manhwa.title} />
                                </a>
                            </li>
                        )}
                    </ul>

                    <h1 className = "heading">Top Oneshots</h1>    
                    <ul className = "top-manga-list">
                        {topOneShots.map((oneShot) => 
                            <li key = {oneShot.mal_id} className = "manga">
                                <a href = "#" onClick = {() => this.handleClick(oneShot)}>
                                    <img className = "top-manga" src = {oneShot.image_url} alt = {oneShot.title} />
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