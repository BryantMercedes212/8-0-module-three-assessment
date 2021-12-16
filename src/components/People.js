import { Component } from "react";

class People extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      search: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      search: this.state.input,
      input: "",
    });
    console.log(this.state.search);
  };
  render() {
    const personInfo = this.props.people.find((person) => {
      return person.name === this.state.search;
    });
    console.log(this.state.search);
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {personInfo ? <p>Name: {personInfo.name}</p> : "Not Found"}
        {personInfo ? <p>Age: {personInfo.age}</p> : null}
        {personInfo ? <p>Name: ${personInfo.gender}</p> : null}
      </div>
    );
  }
}

export default People;
