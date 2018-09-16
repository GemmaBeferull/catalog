import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { showPhones } from "../../actions";

import "./mobiles.css";

// const onClickListener = event => {
//   const hideinfo = document.querySelectorAll("p");
//   hideinfo.forEach(item => {
//     item.classList.remove("hidden");
//   });
// };

class Mobiles extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     mobiles: []
  //   };
  // }
  // componentDidMount() {
  //   axios
  //     .get("/api/phones")
  //     .then(res => res.data)
  //     .then(mobiles => this.setState({ mobiles }));
  // }

  componentWillMount() {
    this.props.showPhones();
  }
  renderUsersList() {
    return this.props.phones.map(phone => {
      return (
        <li key={phone.title}>
          <h2>{phone.title}</h2>{" "}
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
    phones: state.phone.list
  };
}

export default connect(
  mapStateToProps,
  { showPhones }
)(Mobiles);
