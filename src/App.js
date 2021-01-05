import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NavBar from './components/NavBar'
import Home from './components/Home'
import TopAnime from './components/TopAnime/TopAnime';
import TopManga from './components/TopManga/TopManga';
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>  
        <Route path = "/" exact render = {
          () => {
            return (<Home />);
          }
        }/>

        <Route path = "/anime" exact render = {
          () => {
            return (<TopAnime />);
          }
        }/>

        <Route path = "/manga" exact render = {
          () => {
            return (<TopManga />)
          }
        }/>

        <Route path = "/anime-rec" exact render = {
          () => {
            return (<h1>Anime Recommendations</h1>);
          }
        }/>

        <Route path = "/manga-rec" exact render = {
          () => {
            return (<h1>Manga Recommendations</h1>);
          }
        }/>
      </Switch>
    </Router>
  );
}

export default App;
