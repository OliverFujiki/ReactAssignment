import React, { Component } from "react";

export class EmployeeForm extends Component {
  render() {
    return (
      <form
        style={{ display: "flex" }}
        action="https://jsonplaceholder.typicode.com/posts"
        //action="http://dummy.restapiexample.com/api/v1/create	"
        method="post"
      >
        <input
          type="text"
          name="employee_name"
          //name="userId"
          style={{ flex: "10" }}
          placeholder="name..."
        />
        <input
          type="text"
          name="title"
          //name="employee_age"
          style={{ flex: "10" }}
          placeholder="age..."
        />
        <input
          type="text"
          name="body"
          //name="employee_salary"
          style={{ flex: "10" }}
          placeholder="salary..."
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
