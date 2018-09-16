import React, { Component } from "react";
import { connect } from "react-redux";
import { showPhones } from "./actions";

import "./App.css";
// import Mobiles from "./components/mobiles/mobiles";

class App extends Component {
  componentWillMount() {
    this.props.showPhones();
  }
  renderUsersList() {
    return this.props.phones.map(phone => {
      return (
        <li key={phone.title}>
          <h2>{phone.title}</h2>{" "}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="App">
        {/* <Mobiles /> */}
        <h1>Mobiles Catalog</h1>
        <ul>{this.renderUsersList()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    phones: state.phone.list
  };
}

export default connect(
  mapStateToProps,
  { showPhones }
)(App);
