import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { nasaApi } from './nasaApi'
import searchSlice from './searchSlice/searchSlice'
import detailSlice from './searchSlice/detailSlice'

export const store = configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    search: searchSlice,
    detail: detailSlice
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        nasaApi.middleware,
    ),
})


setupListeners(store.dispatch)