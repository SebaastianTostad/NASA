import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit"; // Assuming you're using Redux Toolkit

// Import Redux slices
import searchSlice from "../../redux/searchSlice/searchSlice";
import detailSlice from "../../redux/searchSlice/detailSlice";
import { nasaApi } from "../../redux/nasaApi";

function renderWithReduxAndRouter(ui, { preloadedState = {}, storeConfig = {} } = {}) {
  const store = configureStore({
    reducer: {
      [nasaApi.reducerPath]: nasaApi.reducer,
      search: searchSlice,
      detail: detailSlice,
    },
    preloadedState,
    ...storeConfig,
  });

  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store,
  };
}

export { renderWithReduxAndRouter };
