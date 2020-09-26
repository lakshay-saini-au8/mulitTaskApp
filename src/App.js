import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import RandomData from "./components/RandomData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoutes exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoutes exact path="/calculator" component={Calculator} />
        <ProtectedRoutes exact path="/todo" component={Todo} />
        <ProtectedRoutes exact path="/randomdata" component={RandomData} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
