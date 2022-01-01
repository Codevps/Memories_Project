import * as api from "../api";
import { CREATE, FETCH_ALL } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  const { data } = await api.fetchPosts();
  try {
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);
  try {
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
