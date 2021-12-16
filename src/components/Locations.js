import { Component } from "react";
import "./Locations.css";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      isLocationsShown: false,
    };
  }

  handleClick = () => {
    const { isLocationsShown } = this.state;
    this.setState({ isLocationsShown: !isLocationsShown });
  };

  render() {
    const allLocations = this.props.locations.map((location) => {
      return (
        <li className="eachLocation">
          Name: {location.name}
          Climate: {location.climate}
          Terrain: {location.terrain}
        </li>
      );
    });
    const { isLocationsShown } = this.state;
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {isLocationsShown ? "Hide Locations" : "Show Locations"}
        </button>
        <ul className={isLocationsShown ? "listContainer" : "listHidden"}>
          {" "}
          {allLocations}
        </ul>
      </div>
    );
  }
}

export default Locations;
