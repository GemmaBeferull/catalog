import React, { Component } from "react";
import { connect } from "react-redux";
import { showPhones, moreDetails } from "../../actions";
import PhoneDetailComponent from "../PhoneDetailComponent/PhoneDetailComponent";
import Spinner from "../spinner/spinner";

import "./PhoneListContainer.css";

class PhoneListContainer extends Component {
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
      <div className="phoneList">
        {this.props.spinner ? <Spinner /> : null}

        <ul className="phoneListContainer">
          {this.props.phones.map(phone => (
            <li key={phone.id} onClick={this.handleClick}>
              <h2 className="title">{phone.title}</h2>
              <img src={phone.imagesrc} alt={phone.title} />
              <PhoneDetailComponent
                description={phone.description}
                price={phone.price}
                color={phone.color}
                imagesrc={phone.imagesrc}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    phones: state.phone.list,
    hidden: state.hide.hidden,
    spinner: state.phone.spinner
  };
}

export default connect(
  mapStateToProps,
  { showPhones, moreDetails }
)(PhoneListContainer);
