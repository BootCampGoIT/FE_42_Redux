import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp, signIn } from "../../redux/auth/authActions";

const initialState = { email: "", password: "" };

class AuthForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/signup") {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
          { ...this.state, returnSecureToken: true }
        )
        .then(({ data }) => this.props.signUp(data));
    } else
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
          { ...this.state, returnSecureToken: true }
        )
        .then(({ data }) => this.props.signIn(data));

    this.setState({ ...initialState });
  };
  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Email
          <input
            name='email'
            type='text'
            value={email}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            name='password'
            type='text'
            value={password}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>
          {this.props.location.pathname === "/signup" ? "Sign Up" : "Sign In"}
        </button>
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     signUp: (payload) => dispatch({ type: SIGNUP, payload })
//   };
// };

export default connect(null, { signUp, signIn })(AuthForm);

// const getName = () => console.log("Hello");

// const getDAta = getName
// const name = "Alex";

// const data = {
//   name: name,
//   getName: getName
// };
