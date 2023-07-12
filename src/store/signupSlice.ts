import {createSlice} from "@reduxjs/toolkit"

const signupSlice = createSlice({
  name:"signup",
  initialState:{
    tel:""
  },
  reducers:{
    changeTel:(state,action)=>{
      state.tel = action.payload 
    }
  }
})

export const{changeTel} =signupSlice.actions
export default signupSlice.reducer 