import React, { Component } from "react";
import "./App.css";
import PhoneListContainer from "./components/PhoneListContainer/PhoneListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhoneListContainer />
      </div>
    );
  }
}

export default App;
