import * as actiontype from "./types";
import axios from "axios";

export const fetchRecipe = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/recipes/");
    dispatch({
      type: actiontype.FETCH_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addRecipe = (recipe) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in recipe) formData.append(key, recipe[key]);
    const res = await axios.post("http://localhost:8000/recipes/", formData);
    dispatch({
      type: actiontype.ADD_RECIPE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateRecipe = (recipe) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in recipe) formData.append(key, recipe[key]);
    const res = await axios.post(
      "http://localhost:8000/recipes/" + recipe.id,
      formData
    );
    dispatch({
      type: actiontype.UPDATE_RECIPE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
