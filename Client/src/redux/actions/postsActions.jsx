export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const SAVE_POST_REQUEST = 'SAVE_POST_REQUEST';
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS';
export const SAVE_POST_FAILURE = 'SAVE_POST_FAILURE';
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const res = await fetch('http://localhost:5000/api/posts');
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });
  try {
    const res = await fetch(`http://localhost:5000/api/posts/${id}`);
    if (!res.ok) throw new Error('Failed to fetch post');
    const data = await res.json();
    dispatch({ type: FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POST_FAILURE, payload: error.message });
  }
};

export const savePost = (postData, id = null) => async (dispatch) => {
  dispatch({ type: SAVE_POST_REQUEST });
  try {
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:5000/api/posts/${id}` : 'http://localhost:5000/api/posts';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!res.ok) throw new Error('Failed to save post');
    dispatch({ type: SAVE_POST_SUCCESS });
    dispatch(fetchPosts());
  } catch (error) {
    dispatch({ type: SAVE_POST_FAILURE, payload: error.message });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_REQUEST });
  try {
    const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete post');
    dispatch({ type: DELETE_POST_SUCCESS });
    dispatch(fetchPosts());
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
  }
};