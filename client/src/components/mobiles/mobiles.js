import React, { Component } from "react";
import axios from "axios";

import "./mobiles.css";

class Mobiles extends Component {
  constructor() {
    super();
    this.state = {
      mobiles: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/phones")
      .then(res => res.data)
      .then(mobiles => this.setState({ mobiles }));
  }
  render() {
    return (
      <div>
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
