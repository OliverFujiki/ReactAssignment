import React, { Component } from "react";
import { Link } from "react-router-dom";

export class credentials extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="email"
          name="email"
          style={{ flex: "10" }}
          placeholder="email..."
        />
        <input
          type="password"
          name="password"
          style={{ flex: "10" }}
          placeholder="password..."
        />
        <Link style={linkStyle} to="/read">
          Submit
        </Link>
      </form>
    );
  }
}
