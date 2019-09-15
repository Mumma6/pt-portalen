import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

// Get posts
export const getPosts = () => async (dispatch: any) => {
  try {
    const res = await axios.get("/api/posts/");

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
}

// Delete post
export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    })

    dispatch(setAlert("Post borttagen", "success"))
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}

// Add post 
export const addPost = (formData: any) => async (dispatch: any) => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const res = await axios.post("/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    })

    dispatch(setAlert("Inlägg skapat", "success"))
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}

// Get post
export const getPost = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
}

// Add comment
export const addComment = (postId: any, formData: any) => async (dispatch: any) => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })

    dispatch(setAlert("Kommentar tillagd", "success"))
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}

// Delete comment
export const deleteComment = (postId: any, commentId: any) => async (dispatch: any) => {


  try {
    const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    })

    dispatch(setAlert("Kommentar borttagen", "success"))
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}