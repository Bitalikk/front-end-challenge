import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import postsReducer from './posts/postsReducers';
import commentsReducer from './comments/commentsReducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default store;
