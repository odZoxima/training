import React, { useState } from "react";
import { createStore } from "redux";

const UpdatedComponent = (OriginalComponent) => {
  const NewComponent = () => {
    const ADD_PRODUCT = "ADD_PRODUCT";
    const SUBTRACT_PRODUCT = "SUBTRACT_PRODUCT";

    const addFunction = () => {
      return {
        type: ADD_PRODUCT,
        info: "Incrementing by 1",
      };
    };

    const subtractFunction = () => {
      return {
        type: SUBTRACT_PRODUCT,
        info: "Decrementing by 1",
      };
    };

    const initialState = {
      count: 0,
      type: "Something",
      status: false,
    };

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case ADD_PRODUCT:
          return { ...state, count: state.count + 1 };

        case SUBTRACT_PRODUCT:
          return state.count > 0 ? { ...state, count: state.count - 1 } : state;

        default:
          return state;
      }
    };

    const store = createStore(reducer);

    store.subscribe(() => console.log(store.getState().count))

    return (
      <OriginalComponent
        count={store.getState().count}
        incrementCount={() => store.dispatch(addFunction())}
        decrementCount={() => store.dispatch(subtractFunction())}
      />
    );
  };

  return NewComponent;
};

export default UpdatedComponent;
