import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  q: "",
  extraFilters: {}
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQueryInput: (state, action) => {
      state.q = action.payload
    },
    setExtraFilters: (state, action) => {
      state.extraFilters= action.payload
  },
}
})

export const {
    setQueryInput,
    setExtraFilters
} = searchSlice.actions

export default searchSlice.reducer