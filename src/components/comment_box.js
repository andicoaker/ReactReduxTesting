import React, { Component } from 'react';
import { connect } from 'react-redux';
// import all action creators from the actions file and save as variable, actions
import * as actions from '../actions';

// upgraded comment_box from component to a container

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  // handleSubmit tells the browser to clear the textarea upon clicking submit button
  handleSubmit(event) {
    event.preventDefault();
    // call action creator and pass it the current comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

// pass in null because we don't care about any piece of state in this instance
// pass entire actions object to automatically bind all action creators to the comment_box container. now we have access as this.props
export default connect(null, actions)(CommentBox);
