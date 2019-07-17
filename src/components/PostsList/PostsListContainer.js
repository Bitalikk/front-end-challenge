import { connect } from 'react-redux';
import PostsList from './PostsList';
import * as postsOperations from '../../redux/posts/postsOperations';
import * as postsSelectors from '../../redux/posts/postsSelectors';

const mapStateToProps = state => ({
  items: postsSelectors.getAllPosts(state),
});

const mapDispatchToProps = {
  addPost: postsOperations.addPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);
