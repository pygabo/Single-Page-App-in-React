import React from "react";
import PropTypes from "prop-types";

class Media extends React.Component {
  state = {
    owner: "jose Guzman"
  };
  handleClick = event => {
    console.log(this.props.title);
    this.setState({
      owner: "Lizz"
    });
  };
  render() {
    return (
      <div className="container" onClick={this.handleClick}>
        <div className="row">
          <div className="border border-primary col-3">
            <img src={this.props.image} all="" className="img-fluid" />
            <h4>{this.props.title}</h4>
            <p>{this.state.owner}</p>
          </div>
        </div>
      </div>
    );
  }
}
Media.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio"])
};

export default Media;
