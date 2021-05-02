import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header"
import Search from "./Search"
import Table from "./Table"
import API from "../utils/API";

class Employees extends Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    result: { results: [] }
  }
}

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees() {
    API.search()
      .then((res) => {
        this.setState({ 
          isLoaded: true,
          result: res.data 
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <Wrapper>
      <Header/>
      <Search/>
      <Table result={this.state.result}/>
      </Wrapper>
  }
}

export default Employees;
