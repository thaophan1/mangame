import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />

      <Route path = "/" exact render = {
        () => {
          return (<h1>Home</h1>);
        }
      }/>

      <Route path = "/anime" exact render = {
        () => {
          return (<h1>Anime</h1>);
        }
      }/>

      <Route path = "/manga" exact render = {
        () => {
          return (<h1>Manga</h1>);
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

    </Router>
  );
}

export default App;
