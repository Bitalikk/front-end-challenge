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
    // isEditing: false,
    // selectedPostId: null,
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

  // Update post

  // openEditPostModal = id => {
  //   this.setState({
  //     isEditing: true,
  //     selectedPostId: id,
  //   });
  // };

  // closeEditPostModal = () => {
  //   this.setState({
  //     isEditing: false,
  //     selectedPostId: null,
  //   });
  // };

  // updatePost = ({ text, priority }) => {
  //   TaskAPI.updateTask(this.state.selectedTaskId, { text, priority }).then(
  //     updatedTask => {
  //       this.setState(
  //         state => ({
  //           tasks: state.tasks.map(task =>
  //             task.id === state.selectedTaskId ? updatedTask : task,
  //           ),
  //         }),
  //         this.closeEditTaskModal,
  //       );
  //     },
  //   );
  // };

  render() {
    const { items = [], location } = this.props;
    const { isCreating } = this.state;
    return (
      <>
        <h2>Posts</h2>
        <ul className={css.list}>
          {items.map(item => (
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
          ))}
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
