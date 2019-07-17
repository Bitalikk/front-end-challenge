import { combineReducers } from 'redux';
import { ActionType } from './commentsActions';

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.ADD_COMMENT_SUCCESS:
      return [...state, payload.comment];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.ADD_COMMENT_REQUEST:
      return true;

    case ActionType.ADD_COMMENT_SUCCESS:
    case ActionType.ADD_COMMENT_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_COMMENT_REQUEST:
      return null;

    case ActionType.ADD_COMMENT_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: commentsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
