import React, { Component } from 'react';
import { connect } from "react-redux";
import './Select.css';
import BattleResult from "./BattleResult";

class SelectSkill extends Component {
  constructor(props) {
    super(props);
    this.skillRef = React.createRef();
  }

  filterSearchSkill(e) {
    this.props.setStates({ searchBox: [] });
    const searchedList = this.props.skills.filter((skill) => {
      return skill.power !== null & skill.ename.toLowerCase().startsWith(e.target.value.toLowerCase()); 
    });
    this.props.setStates({ searchBox: searchedList });
  }

  setSkill(e) {
    this.props.setStates({ searchBox: [] });
    this.skillRef.current.focus();
    const setSkill = this.props.skills.find((skill) => {
      return skill.ename.toLowerCase().startsWith(this.skillRef.current.value.toLowerCase()); 
    });
    this.props.setStates({ setSkill: setSkill });
  }

  render() {
    return (
      <div className="SelectSkill">
        <input type="text" placeholder="Which Skill ?" ref={this.skillRef} onChange={(e) => this.filterSearchSkill(e)} />
        <input type="submit" id="skillButton" onClick={(e) => this.setSkill(e)} />
        <div>
          {this.props.searchBox.map(skill => {
            return (
              <li key={this.props.skills.indexOf(skill)}>{skill.ename}</li>
            )
          })}
        </div>
        {Object.keys(this.props.setSkill).length !== 0 && <BattleResult />}
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
)(SelectSkill);
