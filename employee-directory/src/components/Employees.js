import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Wrapper from "./Wrapper";
import Table from "./Table";

class Employees extends Component {
  
    render() {
    return (
      <div>
        <Wrapper/>
        <Header/>
        <Search/>
        <Table/>

      </div>
    );
  }
}

export default Employees;
