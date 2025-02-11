import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MainScheme, MainType } from '../../../types/MainType'

const initialState: MainScheme = {}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    mainData: (state, action: PayloadAction<MainType>) => {
      state.main = action.payload
    },
  },
})

export const { actions: mainActions } = mainSlice
export const { reducer: mainReducer } = mainSlice
