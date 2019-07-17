import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PostEditor from '../PostEditor/PostEditor';
import css from './PostsList.module.css';

class PostsList extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    isCreating: false,
  };

  // Create post

  openCreatePostModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreatePostModal = () => {
    this.setState({ isCreating: false });
  };

  createPost = post => {
    const { addPost } = this.props;
    const postToAdd = {
      ...post,
    };

    addPost(postToAdd);

    this.closeCreatePostModal();
  };

  render() {
    const { items = [], location } = this.props;
    const { isCreating } = this.state;
    return (
      <>
        <h2>Posts</h2>
        <ul className={css.list}>
          {items.map(
            item =>
              item.title && (
                <li key={item.id} className={css.item}>
                  <Link
                    to={{
                      pathname: `/posts/${item.id}`,
                      state: { from: location },
                    }}
                    className={css.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
        <button type="button" onClick={this.openCreatePostModal}>
          Create Post
        </button>
        {isCreating && (
          <Modal onClose={this.closeCreatePostModal}>
            <PostEditor
              onSave={this.createPost}
              onCancel={this.closeCreatePostModal}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default PostsList;
