import * as actiontype from "../action/types";

const initialState = {
  ingredients: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case actiontype.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case actiontype.UPDATE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient
        ),
      };
    default:
      return state;
  }
};
export default reducer;
