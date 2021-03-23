import React, { Component } from "react";
import { addCourseActionCreator } from "../../redux/courses/actions";
import { connect } from "react-redux";

const initialState = { courseName: "", number: "" };

class Form extends Component {
  state = {...initialState};

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourseActionCreator(this.state);
    this.setState({...initialState})
  };
  render() {
    const { courseName, number } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Course
          <input
            name='courseName'
            type='text'
            value={courseName}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Number
          <input
            name='number'
            type='text'
            value={number}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addCourseActionCreator,
};

export default connect(null, mapDispatchToProps)(Form);
