import * as actiontype from "../action/types";

const initialState = {
  categories: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actiontype.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case actiontype.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };
    default:
      return state;
  }
};
export default reducer;
