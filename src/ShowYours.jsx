import React, { Component } from 'react';
import { connect } from "react-redux";
import './Show.css';

class ShowYours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ShowYours">
        <span><b>{this.props.shownYours.name_english} : </b></span>
        <span><b>{this.props.shownYours.name_japanese} : </b></span>
        <span><b>{this.props.shownYours.name_chinese} : </b></span>
        <img className="pic" src={this.props.shownYoursPic}/>
        <div className="bar hp" style={{ width: this.props.shownYours.hp * 5 || 0, background: "orange" }}>HP : {this.props.shownYours.hp}</div>
        <div className="bar atk" style={{ width: this.props.shownYours.atk * 5 || 0, background: "red" }}>Attack : {this.props.shownYours.atk}</div>
        <div className="bar def" style={{ width: this.props.shownYours.def * 5 || 0, background: "red" }}>Defense : {this.props.shownYours.def}</div>
        <div className="bar satk" style={{ width: this.props.shownYours.satk * 5 || 0, background: "green" }}>Sp. Attack : {this.props.shownYours.satk}</div>
        <div className="bar sdef" style={{ width: this.props.shownYours.sdef * 5 || 0, background: "green" }}>Sp. Defense : {this.props.shownYours.sdef}</div>
        <div className="bar spd" style={{ width: this.props.shownYours.spd * 5 || 0, background: "blue" }}>Speed : {this.props.shownYours.spd}</div>
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
    shownYoursPic: state.shownYoursPic
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowYours);
