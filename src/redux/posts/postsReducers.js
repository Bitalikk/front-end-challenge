import { combineReducers } from 'redux';
import { ActionType } from './postsActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_SUCCESS:
      return payload.posts;

    case ActionType.ADD_POST_SUCCESS:
      return [...state, payload.post];

    case ActionType.EDIT_POST_SUCCESS:
      return state.map(post =>
        post.id === payload.id ? payload.updatedPost : post,
      );

    default:
      return state;
  }
};

const itemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POST_WITH_COMMENTS_SUCCESS:
      return payload.post;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_REQUEST:
    case ActionType.FETCH_POST_WITH_COMMENTS_REQUEST:
    case ActionType.ADD_POST_REQUEST:
    case ActionType.EDIT_POST_REQUEST:
      return true;

    case ActionType.FETCH_POSTS_SUCCESS:
    case ActionType.FETCH_POSTS_ERROR:
    case ActionType.FETCH_POST_WITH_COMMENTS_SUCCESS:
    case ActionType.FETCH_POST_WITH_COMMENTS_ERROR:
    case ActionType.ADD_POST_SUCCESS:
    case ActionType.ADD_POSTS_ERROR:
    case ActionType.EDIT_POST_SUCCESS:
    case ActionType.EDIT_POST_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_REQUEST:
    case ActionType.FETCH_POST_WITH_COMMENTS_REQUEST:
    case ActionType.ADD_POST_REQUEST:
    case ActionType.EDIT_POST_REQUEST:
      return null;

    case ActionType.FETCH_POSTS_ERROR:
    case ActionType.FETCH_POST_WITH_COMMENTS_ERROR:
    case ActionType.ADD_POSTS_ERROR:
    case ActionType.EDIT_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  item: itemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
