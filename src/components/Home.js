import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container-fluid home">
            <div className = "row">
                <h1 className = "col-12 about-me">About Me</h1>
            </div>
            
            <div className = "row justify-content-sm-center">
                <p className = "col-12 col-lg-8 col-xl-8 intro-p">
                    Hello, my name is Thao Phan and I am a student at UCSB studying Computer Engineering
                    <br />
                    <hr />
                    <p>
                        My Hobbies include:
                    </p>
                    <ul className = "row hobbies">
                        <li className = "col-6">Watching Anime</li>
                        <li className = "col-6">Playing Video Games</li>
                        <li className = "col-6">Photography</li>
                        <li className = "col-6">Eating Out</li>
                        <li className = "col-6">Shopping</li>
                    </ul>
                    <hr />
                    <p>
                        I hope that this website is useful to you. Although it can only give anime recommendations for now,
                        I hope to expand it to music, food, etc. in the future!
                    </p>
                    <p>
                        Thank you for stopping by, I hope you enjoy the site. If you don't have the time to fully explore, I included my 
                        personal top ten favorite anime list below.
                    </p>
                    <p>
                        If you're looking for a chill playlist, I included the one I always listen to below as well. 
                        I highly recommend it.
                    </p>
                </p>
                <img className = "col-12 col-lg-6 col-xl-4 me" src = "/images/me.jpg" alt = "recommended anime"></img>
            </div>

            <br />
            <div className = "row">
                <h1 className = "col-12 recommendations">My Top 10</h1>
            </div>

            <div className = "top-ten">
                <img className = "anime" src = "/images/naruto.jpg" alt = "naruto"></img>
                <img className = "anime" src = "/images/aot.jpg" alt = "aot"></img>
                <img className = "anime" src = "/images/dr-stone.png" alt = "dr.stone"></img>
                <img className = "anime" src = "/images/promised-neverland.jpg" alt = "the promised neverland"></img>
                <img className = "anime" src = "/images/haikyuu.jpg" alt = "haikyuu"></img>
                <img className = "anime" src = "/images/bunny-girl.jpg" alt = "rascal does not dream of bunny girl senpai"></img>
                <img className = "anime" src = "/images/demon-slayer.jpg" alt = "demon slayer"></img>
                <img className = "anime" src = "/images/food-wars.png" alt = "food wars"></img>
                <img className = "anime" src = "/images/konosuba.jpg" alt = "konosuba"></img>
                <img className = "anime" src = "/images/quintuplets.jpg" alt = "quintessential quintuplets"></img>
            </div>
        </div> 
        );
    }
}
 
export default Home;