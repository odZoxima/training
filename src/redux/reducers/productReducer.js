import { ActionTypes } from "../constants/action-types";

const initialState = {
  status: false,
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, products: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};
