import React, { Component } from 'react';
import { connect } from "react-redux";
import config from "./clientconfig";
import ShowOppos from "./ShowOppos";

class SelectOppos extends Component {
  constructor(props) {
    super(props);
    this.opposRef = React.createRef();
  }

  filterSearchBox(e) {
    this.props.setStates({ searchBox: [] });
    const searchedList = this.props.pokedex.filter((pokemon) => {
      return pokemon.name_english.toLowerCase().startsWith(e.target.value.toLowerCase()); 
    });
    this.props.setStates({ searchBox: searchedList });
  }

  showOppos(e) {
    this.props.setStates({ searchBox: [] });
    this.opposRef.current.focus();
    const shownOppos = this.props.pokedex.find((pokemon) => {
      return pokemon.name_english.toLowerCase().startsWith(this.opposRef.current.value.toLowerCase()); 
    });
    console.log("Oppos: ", shownOppos);
    this.props.setStates({ shownOppos: shownOppos });
    return fetch(`/pokemon/pictures/${shownOppos.id}`, config.server)
    .then(res => res.json())
    .then(buffers => {
      const typedArray = new Uint8Array(buffers[0].data);
      const pngBlob = new Blob([typedArray], {type: "image/png"});
      const shownOpposPic = URL.createObjectURL(pngBlob);
      this.props.setStates({ shownOpposPic: shownOpposPic });
    });
  }

  render() {
    return (
      <div className="SelectOppos">
        <input type="text" placeholder="Oppos Pokemon ?" ref={this.opposRef} onChange={(e) => this.filterSearchBox(e)}/>
        <input type="submit" id="opposButton" onClick={(e) => this.showOppos(e)} />
        <div>
          {this.props.searchBox.map(pokemon => {
            return (
              <li key={this.props.pokedex.indexOf(pokemon)}>{pokemon.name_english}</li>
            )  
          })}
        </div>
        {this.props.shownOpposPic !== "" && <ShowOppos />}
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
)(SelectOppos);
