import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state={
    title: ''
  }

  onSubmit = (e) => {  //pass it on as a prop depending on the current state!!!!****
    e.preventDefault();
    this.props.addTodo(this.state.title);  //update the property when called and its state
    this.setState({title: ''});  //afterwards clear the state of AddTodo
  }

  onChange = (e) =>{  //the state changes!
    this.setState({title: e.target.value});  //e.target.value gives us whatever we type in
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add To do..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />

      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
