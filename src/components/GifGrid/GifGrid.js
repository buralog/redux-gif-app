import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrendingGifs, searchGifs } from "../../actions";
import Button from "../Button";
import "./styles.css";

class GifGrid extends Component {
  componentDidMount() {
    this.props.getTrendingGifs();
  }

  render() {
    const {
      trendingGifs,
      gifs,
      error,
      isLoading,
      getTrendingGifs,
      searchTerm,
      searchGifs
    } = this.props;

    let gifsArray = Object.keys(gifs).length ? gifs[searchTerm] : trendingGifs;

    return (
      <div className="content">
        <section className="grid">
          {gifsArray
            ? gifsArray.map(gif => (
                <div
                  key={gif.id}
                  className={`item item-${Math.ceil(
                    gif.images.fixed_height.height /
                      gif.images.fixed_height.width
                  )}`}
                >
                  <div className="title">{gif.title}</div>
                  <a
                    href={gif.embed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gif.images.fixed_height.url} alt={gif.username} />
                  </a>
                </div>
              ))
            : ""}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button
          onClick={() =>
            !isLoading && searchTerm
              ? searchGifs(searchTerm)
              : getTrendingGifs()
          }
          loading={isLoading}
        >
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  trendingGifs: state.trendingGifs,
  error: state.error,
  gifs: state.gifs,
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  getTrendingGifs: () => dispatch(getTrendingGifs()),
  searchGifs: searchTerm => dispatch(searchGifs(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifGrid);
