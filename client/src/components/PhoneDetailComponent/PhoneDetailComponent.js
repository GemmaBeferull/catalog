import React, { Component } from "react";
import { connect } from "react-redux";
import { showPhones, moreDetails } from "../../actions";
import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.showPhones();
  }
  handleClick(event) {
    this.props.moreDetails(event);
  }

  render() {
    return (
      <li key={phone.title} onClick={this.handleClick}>
        <h2>{phone.title}</h2>
        <img src={phone.imagesrc} alt={phone.title} />
        <p className="details">{phone.description}</p>
      </li>
    );
  }
}
function mapStateToProps(state) {
  return {
    phones: state.phone.list,
    hidden: state.hide.hidden
  };
}

export default connect(
  mapStateToProps,
  { showPhones, moreDetails }
)(PhoneDetailComponent);
