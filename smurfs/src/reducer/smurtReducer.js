import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  POST_DATA
} from "../action";

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
    case POST_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
