import React, { Component } from 'react';
import { connect } from "react-redux";
import './Show.css';

class ShowOppos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ShowOppos">
        <span><b>{this.props.shownOppos.name_english} : </b></span>
        <span><b>{this.props.shownOppos.name_japanese} : </b></span>
        <span><b>{this.props.shownOppos.name_chinese} : </b></span>
        <span><b> Limited Level 50 </b></span>
        <img className="pic" src={this.props.shownOpposPic}/>
        <div className="bar hp" style={{ width: this.props.shownOppos.hp * 5 || 0, background: "orange" }}>HP : {this.props.shownOppos.hp}</div>
        <div className="bar atk" style={{ width: this.props.shownOppos.atk * 5 || 0, background: "red" }}>Attack : {this.props.shownOppos.atk}</div>
        <div className="bar def" style={{ width: this.props.shownOppos.def * 5 || 0, background: "red" }}>Defense : {this.props.shownOppos.def}</div>
        <div className="bar satk" style={{ width: this.props.shownOppos.satk * 5 || 0, background: "green" }}>Sp. Attack : {this.props.shownOppos.satk}</div>
        <div className="bar sdef" style={{ width: this.props.shownOppos.sdef * 5 || 0, background: "green" }}>Sp. Defense : {this.props.shownOppos.sdef}</div>
        <div className="bar spd" style={{ width: this.props.shownOppos.spd * 5 || 0, background: "blue" }}>Speed : {this.props.shownOppos.spd}</div>
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
)(ShowOppos);
