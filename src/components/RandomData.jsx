import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchData,
  serachByName,
  sortByEmail,
  sortByName,
  sortByUserName,
} from "../redux/actions/authAction";
class RandomData extends Component {
  state = {
    inputValue: "",
  };
  componentDidMount() {
    this.props.fetchData();
  }

  handelChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      this.props.fetchData();
      this.setState({ inputValue: value });
    } else {
      this.setState({ inputValue: value });
      this.props.serachByName(value);
    }
  };
  render() {
    return (
      <div>
        <Link to="/calculator">
          <button>Calculator</button>
        </Link>
        <Link to="/todo">
          <button>TODO</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <br />
        <br />
        <br />
        Dummy Data Format
        <br />
        <br />
        <br />
        Sort By: <button onClick={() => this.props.sortByName()}>Name</button>
        <button onClick={() => this.props.sortByUserName()}>UserName</button>
        <button onClick={() => this.props.sortByEmail()}>Email</button>
        <br />
        <br />
        <br />
        Search by Name :{" "}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handelChange}
        />
        <br />
        <br />
        <br />
        <table border="2" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.randomState === null ? (
              <p>Loading.......</p>
            ) : (
              this.props.randomState.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  randomState: state.randomState.randomUserData,
});

export default connect(mapStateToProps, {
  fetchData,
  sortByName,
  sortByEmail,
  sortByUserName,
  serachByName,
})(RandomData);
