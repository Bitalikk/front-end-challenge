export const ActionType = {
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
};

// ADD_COMMENT

export const addCommentRequest = () => ({
  type: ActionType.ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = comment => ({
  type: ActionType.ADD_COMMENT_SUCCESS,
  payload: {
    comment,
  },
});

export const addCommentError = error => ({
  type: ActionType.ADD_COMMENT_ERROR,
  payload: {
    error,
  },
});
