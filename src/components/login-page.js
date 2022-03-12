import React, { Component } from "react";
import CountryList from "./countries";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <h3 style={{textAlign: "left"}}>Login</h3>
          <hr />
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <hr />
          <button type="submit" className="btn-css">
            Sign In
          </button>
          <hr />
          <div class="row">
            <div class="col-md-6 forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="col-md-6 forgot-password">
              New to CMT? <a href="#">Register</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
