import axios from 'axios';
import {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
} from './commentsActions';

export const addComment = comment => dispatch => {
  dispatch(addCommentRequest());

  axios
    .post('https://simple-blog-api.crew.red/comments', comment)
    .then(res => {
      dispatch(addCommentSuccess(res.data));
    })
    .catch(error => {
      dispatch(addCommentError(error));
    });
};

// DUMMY
export const dummy = () => null;
