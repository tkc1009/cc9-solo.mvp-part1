import React, { Component } from 'react';
import { connect } from "react-redux";
import ShowYours from "./ShowYours";
// const { Storage } = require("@google-cloud/storage");

// const storage = new Storage({
//   projectId: "takashi-hosoi-project",
//   keyFilename: "./gcpfile.json"
// });

// const bucketName = "pokemon-pics";

// const getBucketFile = async (bucketName, fileName) => {
//   await storage
//   .bucket(bucketName)
//   .file(fileName)
//   .download()
//   .then(res => {
//     console.log(res);
//     console.log(`${fileName} download from ${bucketName}.`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
// };

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
    // getBucketFile(bucketName, "0001.png");
    // const shownYoursPic = async() => {
    //   var filename ='index.js';

    // }
    // this.props.setStates({ shownYoursPic: shownYoursPic });
  }

  render() {
    return (
      <div className="SelectYours">
        <input type="text" placeholder="search" ref={this.yoursRef} onChange={(e) => this.filterSearchBox(e)}/>
        <input type="submit" id="yoursButton" onClick={(e) => this.showYours(e)} />
        <div>
          {this.props.searchBox.map(pokemon => {
            return (
              <li key={this.props.pokedex.indexOf(pokemon)}>{pokemon.name_english}</li>
            )  
          })}
        </div>
        {this.props.shownYours && <ShowYours />}
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
)(SelectYours);
