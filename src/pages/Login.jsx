import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/authAction";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    return this.props.loggedUser ? (
      <Redirect to="/" />
    ) : (
      <div className="login">
        <div className="login__card">
          <p className="login__heading"> Login screen</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter Your Password"
            />
            <input type="submit" value="Login" />
          </form>

          <Link to="/register" style={{ color: "#000" }}>
            New User? Register Here
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedUser: state.authState.loggedUser,
});

export default connect(mapStateToProps, { login })(Login);
