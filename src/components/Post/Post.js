import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PostEditor from '../PostEditor/PostEditor';
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
    editPost: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    isEditing: false,
    selectedPostId: null,
  };

  componentDidMount() {
    const { fetchPostWithComment } = this.props;
    const id = getIdFromProps(this.props);

    this.setState({
      selectedPostId: id,
    });

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

  // Update post

  openEditPostModal = () => {
    this.setState({
      isEditing: true,
    });
  };

  closeEditPostModal = () => {
    this.setState({
      isEditing: false,
    });
  };

  updatePost = ({ title, body }) => {
    const { editPost } = this.props;
    const { selectedPostId } = this.state;

    editPost(selectedPostId, { title, body });

    this.closeEditPostModal();
  };

  reset = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    const { items, comments } = this.props;
    const { text, isEditing } = this.state;

    return (
      <article className={css.wrapper}>
        <button
          type="button"
          className={css.btnBack}
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <button type="button" onClick={this.openEditPostModal}>
          Edit
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

        {isEditing && (
          <Modal onClose={this.closeEditPostModal}>
            <PostEditor
              onSave={this.updatePost}
              onCancel={this.closeEditPostModal}
              title={items.title}
              body={items.body}
            />
          </Modal>
        )}
      </article>
    );
  }
}

export default Post;
