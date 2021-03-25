import React, { Component } from "react";
import { addCourseActionCreator } from "../../redux/courses/actions";
import { connect } from "react-redux";
import axios from "axios";

const initialState = { courseName: "", number: "" };

class Form extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://myproject-d33c4-default-rtdb.firebaseio.com/courses.json",
      this.state
    );
    this.props.addCourseActionCreator({
      ...this.state,
      id: response.data.name,
    });
    this.setState({ ...initialState });
  };
  render() {
    const { courseName, number } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit}>
        <h2>{this.props.message}</h2>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseActionCreator: (course) => {
      dispatch(addCourseActionCreator(course));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
