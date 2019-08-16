import React, { useState } from "react";

import { connect } from "react-redux";
import { createPost } from "../action/smurfAction";

class NewPost extends React.Component {
  state = {
    name: "",
    age: null,
    height: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("STATE", this.state);

    this.props.onAddPost(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name Here"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Age Here"
              className="form-control"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.number}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Height Here"
              className="form-control"
              name="height"
              onChange={this.handleInputChange}
              value={this.state.height}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);
