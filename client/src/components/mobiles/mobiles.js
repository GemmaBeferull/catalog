import React, { Component } from "react";
import { connect } from "react-redux";
import { showPhones, moreDetails } from "../../actions";

import "./mobiles.css";

class Mobiles extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log(this);
    this.props.showPhones();
  }
  handleClick(event) {
    console.log(this);
    this.props.moreDetails(event);
  }
  renderUsersList() {
    return this.props.phones.map(phone => {
      return (
        <li key={phone.title} onClick={this.handleClick}>
          <h2>{phone.title}</h2>
          <img src={phone.imagesrc} alt={phone.title} />
          <p className="details">{phone.description}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Mobiles Catalog</h1>
        <ul>{this.renderUsersList()}</ul>
      </div>
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
)(Mobiles);
