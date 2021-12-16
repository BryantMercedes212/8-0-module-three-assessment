import { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Locations from "./components/Locations";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      movies: [],
      locations: [],
    };
  }

  fetchLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          people: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
    this.fetchMovies();
    this.fetchLocations();
  };

  render() {
    const { locations, people, movies } = this.state;
    return (
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/locations"
            element={<Locations locations={locations} />}
          />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/people" element={<People people={people} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
