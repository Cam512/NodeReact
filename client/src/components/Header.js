import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";

      case false:
        return "I am logged out";

      default:
        return "I am logged in";
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left-brand-logo">Eboy</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
