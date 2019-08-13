import React, { Component } from 'react';
import { connect } from "react-redux";
import './ShowYours.css';

class ShowYours extends Component {
  constructor(props) {
    super(props);
  }

  // filterSearchBox(e) {
  //   this.props.setStates({ searchBox: [] });
  //   const searchedList = this.props.pokedex.filter((pokemon) => {
  //     return pokemon.name_english.toLowerCase().startsWith(e.target.value.toLowerCase()); 
  //   });
  //   this.props.setStates({ searchBox: searchedList });
  // }

  // showYours(e) {
  //   this.props.setStates({ searchBox: [] });
  //   this.yoursRef.current.focus();
  //   const shownYours = this.props.pokedex.find((pokemon) => {
  //     return pokemon.name_english.toLowerCase().startsWith(this.yoursRef.current.value.toLowerCase()); 
  //   });
  //   console.log("Yours: ", shownYours);
  //   this.props.setStates({ shownYours: shownYours });
  // }

  render() {
    return (
      <div className="ShowYours">
        <div className="bar hp" style={{ width: this.props.shownYours.hp || 0 + "%", background: "yellow" }}>{this.props.shownYours.hp}</div>
        <div className="bar atk" style={{ width: this.props.shownYours.atk || 0 + "%", background: "red" }}>{this.props.shownYours.atk}</div>
        <div className="bar def" style={{ width: this.props.shownYours.def || 0 + "%", background: "red" }}>{this.props.shownYours.def}</div>
        <div className="bar satk" style={{ width: this.props.shownYours.satk || 0 + "%", background: "green" }}>{this.props.shownYours.satk}</div>
        <div className="bar sdef" style={{ width: this.props.shownYours.sdef || 0 + "%", background: "green" }}>{this.props.shownYours.sdef}</div>
        <div className="bar spd" style={{ width: this.props.shownYours.spd || 0 + "%", background: "blue" }}>{this.props.shownYours.spd}</div>
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
    shownYours: state.shownYours
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowYours);
