import React, { Component } from "react";
import { Link } from "react-router-dom";

export class credentials extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="email"
          style={{ flex: "10" }}
          placeholder="email..."
        />
        <input
          type="text"
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
const linkStyle = {
  display: "inline-block",
  border: "none",
  background: "#555",
  color: "#fff",
  padding: "7px 20px",
  cursor: "pointer"
};
export default credentials;
