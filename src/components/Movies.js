import { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieInformationObject: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      movieInformation: this.props.movies[event.target.value],
    });
  };

  render() {
    const allOptions = this.props.movies.map((movie, i) => {
      return (
        <option key={movie.id} value={i}>
          {movie.title}
        </option>
      );
    });
    let movieInformation = this.state.movieInformation;
    if (!movieInformation) {
      movieInformation = {
        title: "",
        release_date: "",
        description: "",
      };
    }
    const { title, release_date, description } = movieInformation;
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange}>
          <option value=""></option>
          {allOptions}
        </select>
        <h3>{title && title}</h3>
        <p>{release_date && `Release Date: ${release_date}`}</p>
        <p>{description && `Description: ${description}`}</p>
      </div>
    );
  }
}

export default Movies;
