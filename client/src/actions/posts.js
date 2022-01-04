import * as api from "../api";
import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

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

export const updatePost = (id, post) => async (dispatch) => {
  const { data } = await api.updatePost(id, post);
  try {
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  await api.deletePost(id);
  try {
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const { data } = await api.likePost(id);
  try {
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
