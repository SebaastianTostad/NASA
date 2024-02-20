import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  q: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQueryInput: (state, action) => {
      state.q = action.payload
    },
  },
})

export const {
    setQueryInput
} = searchSlice.actions

export default searchSlice.reducer