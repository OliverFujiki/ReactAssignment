import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/title";
import { Helmet } from "react-helmet";
import Credentials from "./components/credentials";
import EmployeeList from "./components/createAndRead";
import EmployeeForm from "./components/employeeForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet bodyAttributes={{ style: "background-color : #E6B553" }} />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Header />
                <Credentials />
              </React.Fragment>
            )}
          />
          <Route
            path="/employees"
            render={props => (
              <React.Fragment>
                <EmployeeForm />
                <EmployeeList />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
