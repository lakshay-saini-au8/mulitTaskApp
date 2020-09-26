import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handelChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.register(this.state);
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    return this.props.loggedUser ? (
      <Redirect to="/" />
    ) : (
      <div className="register">
        <div className="register__card">
          <p className="register__heading">Register Here</p>
          <form action="" onSubmit={this.handelSubmit}>
            <input
              type="text"
              name="name"
              onChange={this.handelChange}
              value={this.state.name}
              required
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              onChange={this.handelChange}
              value={this.state.email}
              required
              placeholder="Enter Your EmailId"
            />
            <input
              type="password"
              name="password"
              onChange={this.handelChange}
              value={this.state.password}
              required
              placeholder="Enter Your Password"
            />
            <input type="submit" value="Submit" />
          </form>{" "}
          <Link to="/login" style={{ color: "#000" }}>
            Registerd User ? Login here
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedUser: state.authState.loggedUser,
});

export default connect(mapStateToProps, { register })(Register);
