import React, { Component } from 'react';
import { connect } from "react-redux";
import BattleResult from "./BattleResult";

class SelectSkill extends Component {
  constructor(props) {
    super(props);
    this.skillRef = React.createRef();
  }

  // filterSearchBox(e) {
  //   this.props.setStates({ searchBox: [] });
  //   const searchedList = this.props.pokedex.filter((pokemon) => {
  //     return pokemon.name_english.toLowerCase().startsWith(e.target.value.toLowerCase()); 
  //   });
  //   this.props.setStates({ searchBox: searchedList });
  // }

  setSkill(e) {
    this.props.setStates({ searchBox: [] });
    this.skillRef.current.focus();
    // const setSkill = this.props.pokedex.find((pokemon) => {
    //   return pokemon.name_english.toLowerCase().startsWith(this.opposRef.current.value.toLowerCase()); 
    // });
    // this.props.setStates({ shownOppos: shownOppos });
  }

  render() {
    return (
      <div className="SelectSkill">
        <input type="text" placeholder="Which Skill ?" ref={this.moveRef} />
        <input type="submit" id="skillButton" onClick={(e) => this.setSkill(e)} />
        <div>
          {/* {this.props.searchBox.map(pokemon => {
            return (
              <li key={this.props.pokedex.indexOf(pokemon)}>{pokemon.name_english}</li>
            )
          })} */}
        </div>
        {this.props.setSkill !== {} && <BattleResult />}
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
    setSkill: state.setSkill,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSkill);
