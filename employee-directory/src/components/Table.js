import React, { useReducer } from "react";
import Ascend from "./Ascend";
import Descend from "./Descend";
import Search from "./Search"

function Table(props) {
  const employeeList = props.result.results;

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "change":
        return action.input;
      case "ascend":
        return employeeList.sort((a, b) => (a.name.first > b.name.first.toUpperCase()) ? 1 : -1);
      case "descend":
        return employeeList.sort((a, b) => (a.name.first > b.name.first.toUpperCase()) ? -1 : 1);

      default:
        return state;
    }
  }, employeeList)

  const handleChange = (value) => {
    const matchingEmployee = [];
    for (let i = 0; i < employeeList.length; i++) {
      let currentEmployee = employeeList[i];
      if (currentEmployee.name.first.toLowerCase().includes(value.toLowerCase())) {
        matchingEmployee.push(currentEmployee)

      }
    }
    dispatch({
      type: "change",
      input: matchingEmployee
    });
  }

  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">
            Name&nbsp;
            <span onClick={() => dispatch({ type: "ascend"})}>
              <Ascend/>
            </span>
            <span onClick={() => dispatch({ type: "descend"})}>
              <Descend/>
            </span>
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => (
          <tr key={employee.name.first}>
            <td className="name">
              <img src={employee.picture.thumbnail} alt="employee-pic"></img>
            </td>
            <td className="name">
              {employee.name.first} {employee.name.last}
            </td>
            <td className="name">{employee.email}</td>
            <td className="name">{employee.phone}</td>
            <td className="name">{employee.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
