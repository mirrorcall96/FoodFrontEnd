import * as actiontype from "../action/types";

const initialState = {
  recipes: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case actiontype.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case actiontype.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
      };
    default:
      return state;
  }
};
export default reducer;
