import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // return knex("pokedex")
    // .select()
    // .then((pokemons) => console.log(pokemons))
    // .catch((err) => {
    //   // sanitize known errors
    //   // TODO

    //   // throw unknown errors
    //   return Promise.reject(err);
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // return {
  //   goHome: () => {
  //     dispatch({
  //       type: "GO_HOME"
  //     });
  //   }
  // };
};

const mapStateToProps = state => {
  // return {
  //   currentView: state.currentView,
  //   photos: state.photos,
  //   selectedPhoto: state.selectedPhoto
  // };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
