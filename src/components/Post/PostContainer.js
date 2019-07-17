import { connect } from 'react-redux';
import Post from './Post';
import * as postsOperations from '../../redux/posts/postsOperations';
import * as commentsOperations from '../../redux/comments/commentsOperations';
import * as postsSelectors from '../../redux/posts/postsSelectors';
import { getComments } from '../../redux/comments/commentsSelectors';

const mapStateToProps = state => ({
  items: postsSelectors.getPostWithComments(state),
  comments: getComments(state),
});

const mapDispatchToProps = {
  fetchPostWithComment: postsOperations.fetchPostWithComment,
  addComment: commentsOperations.addComment,
  editPost: postsOperations.editPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
