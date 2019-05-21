import React, { Component } from "react";
import { connect } from "react-redux";
import { searchGifs, loadGifs } from "../../actions";
import { SEARCHTERM } from "../../constants";
import "./styles.css";

const placeHolders = [
  "search your fav gif",
  "to infinity and beyond...",
  "door to gifland",
  "welcome back, neo.",
  "keyboard not found"
];

class Header extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.randomPlaceholder = this.randomPlaceholder.bind(this);
  }

  randomPlaceholder() {
    let index = Math.floor(Math.random() * placeHolders.length);
    return placeHolders[index];
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleKeyPress(event) {
    let { searchTerm } = this.state;
    let { gifs, searchGifs, updateSearchTerm } = this.props;

    if (searchTerm && !gifs[searchTerm] && event.key == "Enter") {
      searchGifs(searchTerm);
    } else if (event.key == "Enter") {
      updateSearchTerm(searchTerm);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let { searchTerm } = this.state;
    let { gifs, searchGifs, updateSearchTerm } = this.props;

    if (!gifs[searchTerm]) {
      searchGifs(searchTerm);
    } else if (searchTerm) {
      updateSearchTerm(searchTerm);
    }
  }

  render() {
    console.log("placeholder:", this.randomPlaceholder());
    return (
      <div className="navbar">
        <h1 className="logo">REDUX-GIF</h1>
        <div className="search-box-wrapper">
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder={this.randomPlaceholder()}
            className="search-box-input"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button className="search-box-button" onClick={this.handleSubmit}>
            <span role="img" aria-label="Magnifying Glass">
              &#128269;
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  gifs: state.gifs
});

const mapDispatchToProps = dispatch => ({
  searchGifs: searchTerm => dispatch(searchGifs(searchTerm)),
  loadGifs: (gifs, searchTerm) =>
    dispatch(loadGifs(gifs[searchTerm], searchTerm)),
  updateSearchTerm: searchTerm =>
    dispatch({ type: SEARCHTERM.UPDATE, searchTerm })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
