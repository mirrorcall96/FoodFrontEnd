import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchCatagory } from "./action/categoryActions";
import { fetchIngredient } from "./action/ingredientActions";
import { fetchRecipe } from "./action/recipeActions";

import reducer from "./reducer/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchCatagory());
store.dispatch(fetchIngredient());
store.dispatch(fetchRecipe());

export default store;
