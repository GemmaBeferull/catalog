import React, { Component } from "react";
import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends Component {
  render() {
    return (
      <div className="detailsContainer hidden">
        <img
          className="detailImage"
          src={this.props.imagesrc}
          alt={this.props.title}
        />
        <div className="details">
          <p className="description">{this.props.description}</p>
          <p className="price">{this.props.price}</p>
          <p className="color">{this.props.color}</p>
        </div>
      </div>
    );
  }
}

export default PhoneDetailComponent;
