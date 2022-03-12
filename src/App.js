import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login-page";
import SignUp from "./components/signup-page";
import CountryList from "./components/countries";
function App() {
  return (
    <Router>
      <div style={{ margin: "100px" }}>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-css">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                <span style={{ color: "white" }}>CMP</span>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      <span style={{ color: "white" }}>Login</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      <span style={{ color: "white", fontweight: "20px" }}>
                        Register
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper scroll">
            <div className="auth-inner scroll">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
