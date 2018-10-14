import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment } from '../actions';

class CommentBox extends Component {
  state = { comment: ''};

  handleOnChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: trigger an action to save  comment in store
    this.setState({
      comment: ''
    });
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h3>Add your Comment</h3>
          <textarea
            value={this.state.comment}
            onChange={this.handleOnChange}
          />
          <div>
            <button>Save comment</button>
          </div>
        </form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);