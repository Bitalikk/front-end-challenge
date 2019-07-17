export const ActionType = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
  FETCH_POST_WITH_COMMENTS_REQUEST: 'FETCH_POST_WITH_COMMENTS_REQUEST',
  FETCH_POST_WITH_COMMENTS_SUCCESS: 'FETCH_POST_WITH_COMMENTS_SUCCESS',
  FETCH_POST_WITH_COMMENTS_ERROR: 'FETCH_POST_WITH_COMMENTS_ERROR',
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  EDIT_POST_REQUEST: 'EDIT_POST_REQUEST',
  EDIT_POST_SUCCESS: 'EDIT_POST_SUCCESS',
  EDIT_POST_ERROR: 'EDIT_POST_ERROR',
};

// FETCH_POSTS

export const fetchPostsRequest = () => ({
  type: ActionType.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = posts => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

export const fetchPostsError = error => ({
  type: ActionType.FETCH_POSTS_ERROR,
  payload: {
    error,
  },
});

// FETCH_POST_WITH_COMMENTS

export const fetchPostWithCommentsRequest = () => ({
  type: ActionType.FETCH_POST_WITH_COMMENTS_REQUEST,
});

export const fetchPostWithCommentsSuccess = post => ({
  type: ActionType.FETCH_POST_WITH_COMMENTS_SUCCESS,
  payload: {
    post,
  },
});

export const fetchPostWithCommentsError = error => ({
  type: ActionType.FETCH_POST_WITH_COMMENTS_ERROR,
  payload: {
    error,
  },
});

// ADD_POST

export const addPostRequest = () => ({
  type: ActionType.ADD_POST_REQUEST,
});

export const addPostSuccess = post => ({
  type: ActionType.ADD_POST_SUCCESS,
  payload: {
    post,
  },
});

export const addPostError = error => ({
  type: ActionType.ADD_POST_ERROR,
  payload: {
    error,
  },
});

// EDIT_POST

export const editPostRequest = () => ({
  type: ActionType.EDIT_POST_REQUEST,
});

export const editPostSuccess = (id, updatedPost) => ({
  type: ActionType.EDIT_POST_SUCCESS,
  payload: {
    id,
    updatedPost,
  },
});

export const editPostError = error => ({
  type: ActionType.EDIT_POST_ERROR,
  payload: {
    error,
  },
});
