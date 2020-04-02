import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle() {

    return {  //an easier way to write our code
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through"
    //   };
    // } else {
    //   return {
    //     textDecoration: "none"
    //   };
    // }
  }

  // markComplete = () => {    //arrow function to avoid error when using this.props
  //   console.log(this.props)
  // }

  render() {
    const {id, title} = this.props.todo;  //**deconstruct so we can use id, and title

    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

// const itemStyle ={
//   backgroundColor: '#f4f4f4'
// }

const btnStyle ={
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
