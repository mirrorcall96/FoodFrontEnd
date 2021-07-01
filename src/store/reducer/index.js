import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";
import recipeReducer from "./recipeReducer";
const rootReducer = combineReducers({
  categories: categoryReducer,
  ingredients: ingredientReducer,
  recipes: recipeReducer,
});

export default rootReducer;
