import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import config from "./clientconfig";
import SelectYours from "./SelectYours";
import SelectOppos from "./SelectOppos";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return fetch(`http://localhost:4000/pokedex`, config.server)
    .then(res => res.json())
    .then(pokemons => {
      console.log("config.server: ", config.server)
      this.props.setStates({ pokedex: pokemons })
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.pokedex.forEach(pokemon => {
          if(pokemon.id === 1)console.log("GET!!!");
        })}
        <SelectYours />
        <SelectOppos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStates: object => {
      dispatch({
        type: "SET_STATES",
        object: object
      });
    }
  };
};

const mapStateToProps = state => {
  return {
    pokedex: state.pokedex,
    searchBox: state.searchBox,
    shownYours: state.shownYours,
    shownYoursPic: state.shownYoursPic,
    shownOppos: state.shownOppos,
    shownOpposPic: state.shownOpposPic,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
