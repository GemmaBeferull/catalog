import React, { Component } from "react";
import "./App.css";
import PhoneListContainer from "./components/PhoneListContainer/PhoneListContainer";
import Header from "./components/Header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhoneListContainer />
      </div>
    );
  }
}

export default App;
