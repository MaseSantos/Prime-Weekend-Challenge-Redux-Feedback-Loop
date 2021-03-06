import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SupportedButton extends Component {
  handleClick = () => {
    this.props.history.push("/supported");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default withRouter(SupportedButton);
