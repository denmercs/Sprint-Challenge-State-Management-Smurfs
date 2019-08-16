import { FETCHING_DATA_SUCCESS, ADD_POST, DELETE_POST } from "../action";

const initialState = {
  cards: [],
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  console.log("THIS IS THE ACTION", action);
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        isLoading: true
      };
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
};
