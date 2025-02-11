import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MyOrdersScheme, MyOrdersType } from '../../../types/MyOrdersType'


const initialState: MyOrdersScheme = {}

export const myOrderSlice = createSlice({
  name: 'myOrder',
  initialState,
  reducers: {
    myOrderData: (state, action: PayloadAction<MyOrdersType>) => {
      state.myOrder = action.payload
    },
  },
})

export const { actions: myOrderActions } = myOrderSlice
export const { reducer: myOrderReducer } = myOrderSlice
