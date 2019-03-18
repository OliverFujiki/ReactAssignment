import React, { Component } from "react";

export class EmployeeForm extends Component {
  render() {
    return (
      <form
        style={{ display: "flex" }}
        action="https://jsonplaceholder.typicode.com/posts"
        method="post"
      >
        <input
          type="text"
          name="userId"
          style={{ flex: "10" }}
          placeholder="name..."
        />
        <input
          type="text"
          name="title"
          style={{ flex: "10" }}
          placeholder="salary..."
        />
        <input
          type="text"
          name="body"
          style={{ flex: "10" }}
          placeholder="age..."
        />
        <input type="submit" value="Submit" className="btn" style={linkStyle} />
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

export default EmployeeForm;
