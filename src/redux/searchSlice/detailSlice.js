import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCard: "",
}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCard = action.payload
    },
  },
})

export const {
    selectCard
} = detailSlice.actions

export default detailSlice.reducer