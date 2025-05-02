import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  SAVE_POST_REQUEST,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from '../actions/postsActions';

const initialState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FETCH_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, currentPost: action.payload };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SAVE_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case SAVE_POST_SUCCESS:
      return { ...state, loading: false };
    case SAVE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false };
    case DELETE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}