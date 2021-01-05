import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Review.css'

class MangaReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() { 
        const reviewer = this.props.review.reviewer

        return (  
            <div className = {this.state.clicked? "row review-expand no-padding":"row review-compact no-padding"}
            onClick = {this.handleClick}>
                <img className = "col-2 pfp no-padding" src = {reviewer.image_url}/>
                <div className = "col-10">
                    <a className = "col-12 reviewer-username no-padding" href = {reviewer.url} target = "_blank">{reviewer.username}</a>
                    <h2 className = "col-2 review-score no-padding">Overall <br/> {reviewer.scores.overall}</h2>
                    <h2 className = "col-2 review-score no-padding">Story <br/> {reviewer.scores.story}</h2>
                    <h2 className = "col-1 review-score no-padding">Art <br/>{this.props.type == "anime" ? reviewer.scores.animation : reviewer.scores.art}</h2>
                    <h2 className = "col-3 review-score no-padding">Character <br/> {reviewer.scores.character}</h2>
                    <h2 className = "col-3 review-score no-padding">Enjoyment <br/> {reviewer.scores.enjoyment}</h2>
                </div>
                <p className = "col-11 review-content no-padding">{this.props.review.content}</p>
            </div>
        );
    }
}
 
export default MangaReview;