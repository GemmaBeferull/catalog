import React, { Component } from "react";

import "./mobiles.css";

class Mobiles extends Component {
  constructor() {
    super();
    this.state = {
      mobiles: []
    };
  }
  componentDidMount() {
    fetch("/api/phones")
      .then(res => res.json())
      .then(mobiles =>
        this.setState({ mobiles }, () =>
          console.log("mobiles fetched...", mobiles)
        )
      );
  }
  render() {
    return (
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Mobiles Component</h1>
        <ul>
          {this.state.mobiles.map(mobile => (
            <li key={mobile.title}>
              <h2>{mobile.title}</h2>
              <p>{mobile.description}</p>

              <img src={mobile.imagesrc} alt={mobile.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Mobiles;
