import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Post.module.css';

const getIdFromProps = props => props.match.params.id;

class Post extends Component {
  static propTypes = {
    fetchPostWithComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    items: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  };

  state = {
    text: '',
  };

  componentDidMount() {
    const { fetchPostWithComment } = this.props;
    const id = getIdFromProps(this.props);

    fetchPostWithComment(id);
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/');
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addComment } = this.props;
    const { text } = this.state;
    const comment = {
      postId: getIdFromProps(this.props),
      body: text,
    };
    addComment(comment);
    this.reset();
  };

  reset = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    const { items, comments } = this.props;
    const { text } = this.state;
    return (
      <article className={css.wrapper}>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={css.postContainer}>
          <h2>{items.title}</h2>
          <p className={css.postBody}>{items.body}</p>
          <ul className={css.commentList}>
            {items.comments &&
              items.comments.map(comment => (
                <li key={comment.id} className={css.commentItem}>
                  {comment.body}
                </li>
              ))}
            {comments &&
              comments.map(comment => (
                <li key={comment.id} className={css.commentItem}>
                  {comment.body}
                </li>
              ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <textarea
              type="text"
              name="text"
              cols="50"
              rows="5"
              value={text}
              onChange={this.handleChange}
            />
            <button type="submit" className={css.btn}>
              Add comment
            </button>
          </form>
        </div>
      </article>
    );
  }
}

export default Post;
