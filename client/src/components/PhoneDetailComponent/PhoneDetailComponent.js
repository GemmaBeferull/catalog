import React, { Component } from "react";
import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends Component {
  render() {
    return (
      <div className="acordion hidden">
        <p className="details">{this.props.description}</p>
      </div>
    );
  }
}

export default PhoneDetailComponent;
