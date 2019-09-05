import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
  GET_PROFILES
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch: any) => {
  try {
    const res = await axios.get("/api/profile/me");
    console.log("hej från funk");
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get all profiles
export const getProfiles = () => async (dispatch: any) => {
  // Remove current profile from state
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/api/profile/");
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get profile by ID
export const getProfileID = (userID: any) => async (dispatch: any) => {
  
  try {
    const res = await axios.get(`/api/profile/user/${userID}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (formData: any) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Profil registrerad!", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add experience
export const addExperience = (formData: any) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put("/api/profile/experience", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Arbetserfarenhet tillagd", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add education
export const addEducation = (formData: any) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put("/api/profile/education", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Utbildning tillagd", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Delete experience
export const deleteExperience = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Arbetserfarenhet borttagen", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Delete education
export const deleteEducation = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Utbildning borttagen", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Delete account and profile
export const deleteAccount = () => async (dispatch: any) => {
  if (
    window.confirm(
      "Är du säker? Du kan inte få tillbaka ditt konto ifall du tar bort det"
    )
  ) {
    try {
      const res = await axios.delete("/api/profile");

      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: DELETE_ACCOUNT
      });

      dispatch(setAlert("Ditt konto har blivit raderat", "success"));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};
