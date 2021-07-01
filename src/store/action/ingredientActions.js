import * as actiontype from "./types";
import axios from "axios";

export const fetchIngredient = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/ingredients/");
    dispatch({
      type: actiontype.FETCH_INGREDIENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addIngredient = (ingredient) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in ingredient) formData.append(key, ingredient[key]);
    const res = await axios.post(
      "http://localhost:8000/ingredients/",
      formData
    );
    dispatch({
      type: actiontype.ADD_INGREDIENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateIngredient = (ingredient) => async (dispatch) => {
  try {
    console.log(ingredient);
    const formData = new FormData();
    for (const key in ingredient) formData.append(key, ingredient[key]);

    const res = await axios.post(
      "http://localhost:8000/ingredients/" + ingredient.id,
      formData
    );
    dispatch({
      type: actiontype.UPDATE_INGREDIENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
