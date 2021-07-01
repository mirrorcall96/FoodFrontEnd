import * as actiontype from "./types";
import axios from "axios";

export const fetchCatagory = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/categories/");
    dispatch({
      type: actiontype.FETCH_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addCatagory = (category) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in category) formData.append(key, category[key]);
    const res = await axios.post("http://localhost:8000/categories/", formData);
    dispatch({
      type: actiontype.ADD_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateCatagory = (category) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in category) formData.append(key, category[key]);
    const res = await axios.post(
      "http://localhost:8000/categories/" + category.id,
      formData
    );
    dispatch({
      type: actiontype.UPDATE_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
