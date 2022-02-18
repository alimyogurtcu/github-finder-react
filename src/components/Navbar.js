import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={this.props.clearUsers}>
            <i className={this.props.icon}></i> {this.props.title}
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
