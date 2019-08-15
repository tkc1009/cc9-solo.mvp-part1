import React, { Component } from 'react';
import title from './title.png';
import './App.css';
import { connect } from "react-redux";
import config from "./clientconfig";
import SelectYours from "./SelectYours";
import SelectOppos from "./SelectOppos";
import SelectSkill from "./SelectSkill";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`/pokedex`, config.server)
    .then(res => res.json())
    .then(pokemons => {
      console.log("config.server: ", config.server);
      this.props.setStates({ pokedex: pokemons });
    });
    fetch(`/skills`, config.server)
    .then(res => res.json())
    .then(skills => {
      this.props.setStates({ skills: skills })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="title" src={title} />
        <p><b>
          YOU CAN SELECT YOURS AND OPPOS POKEMON AND BATTLE !
        </b></p>
        </header>
        {this.props.pokedex.forEach(pokemon => {
          if(pokemon.id === 1)console.log("POKEMON GET !!!");
        })}
        {this.props.skills.forEach(skill => {
          if(skill.id === 1)console.log("SKILL GET !!!");
        })}
        <SelectYours />
        <SelectOppos />
        {this.props.shownYoursPic !== "" && this.props.shownOpposPic !== "" && <SelectSkill />}
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
    skills: state.skills,
    setSkill: state.setSkill,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
