import React, { Component } from "react";
import "./App.css";
import PhoneListContainer from "./components/PhoneListContainer/PhoneListContainer";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhoneListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
