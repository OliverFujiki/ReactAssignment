import React from "react";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: []
    };
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            employees: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {employees.map(employee => (
            <li key={employee.name}>{employee.employee_name}</li>
          ))}
        </ul>
      );
    }
  }
}

//https://reactjs.org/docs/faq-ajax.html
export default EmployeeList;
