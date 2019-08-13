import React, { Component } from 'react';
import { connect } from "react-redux";
import config from "./clientconfig";
import ShowYours from "./ShowYours";

class SelectYours extends Component {
  constructor(props) {
    super(props);
    this.yoursRef = React.createRef();
  }

  filterSearchBox(e) {
    this.props.setStates({ searchBox: [] });
    const searchedList = this.props.pokedex.filter((pokemon) => {
      return pokemon.name_english.toLowerCase().startsWith(e.target.value.toLowerCase()); 
    });
    this.props.setStates({ searchBox: searchedList });
  }

  showYours(e) {
    this.props.setStates({ searchBox: [] });
    this.yoursRef.current.focus();
    const shownYours = this.props.pokedex.find((pokemon) => {
      return pokemon.name_english.toLowerCase().startsWith(this.yoursRef.current.value.toLowerCase()); 
    });
    console.log("Yours: ", shownYours);
    this.props.setStates({ shownYours: shownYours });
    return fetch(`http://localhost:4000/pokemon/pictures/${shownYours.id}`, config.server)
    .then(res => res.json())
    .then(buffers => {
      const typedArray = new Uint8Array(buffers[0].data);
      const pngBlob = new Blob([typedArray], {type: "image/png"});
      const shownYoursPic = URL.createObjectURL(pngBlob);
      this.props.setStates({ shownYoursPic: shownYoursPic });
    });
  }

  render() {
    return (
      <div className="SelectYours">
        <input type="text" placeholder="Yours Pokemon ?" ref={this.yoursRef} onChange={(e) => this.filterSearchBox(e)}/>
        <input type="submit" id="yoursButton" onClick={(e) => this.showYours(e)} />
        <div>
          {this.props.searchBox.map(pokemon => {
            return (
              <li key={this.props.pokedex.indexOf(pokemon)}>{pokemon.name_english}</li>
            )  
          })}
        </div>
        {this.props.shownYoursPic !== "" && <ShowYours />}
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
)(SelectYours);
