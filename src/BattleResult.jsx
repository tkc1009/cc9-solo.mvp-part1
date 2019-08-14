import React, { Component } from 'react';
import { connect } from "react-redux";

class BattleResult extends Component {
  constructor(props) {
    super(props);
  }

  calculateDamage(){
    return Math.floor(((50 * 2 / 5 + 2) * (this.props.setSkill.power * this.props.shownYours.satk / this.props.shownOppos.sdef) / 50 + 2) * (Math.random() * (1 - 0.85) + 0.85));
  }

  render() {
    return (
      <div className="BattleResult">
        <span><b>{this.props.setSkill.ename} : </b></span>
        <span><b>{this.props.setSkill.jname} : </b></span>
        <span><b>{this.props.setSkill.cname} : </b></span>
        <span><b> Maximum Power {this.props.setSkill.power} </b></span>
        <div><p><b>
          BATTLE RESULT !
        </b></p></div>
        <div><b>Damage : {this.calculateDamage()}</b></div>
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
)(BattleResult);
