import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Wrapper from "./Wrapper";
import Table from "./Table";
import API from "../utils/API"

class Employees extends Component {
  state = {
    result: { results: []}
  }

  componentDidMount() {
    this.searchEmployees()
  }

  searchEmployees() {
    API.search()
    .then(res => {
      this.setState({ result: res.data})
    console.log(res.data);
    })
    .catch(err => console.log(err)); 
  };

    render() {
    return (
      <div>
        <Wrapper/>
        <Header/>
        <Search/>
        <Table 
          result={this.state.result}/>

      </div>
    );
  }
}

export default Employees;
