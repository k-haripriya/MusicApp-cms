import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IHeaderPayload {
    name:string
}

const initialState = 'Dashboard'
const HeaderSlice = createSlice({
    name:'Header',
    initialState,
    reducers:{
        setHeader:(state,action: PayloadAction<IHeaderPayload>)=>{
            return action.payload.name;
        }
    }
})

export const { setHeader } = HeaderSlice.actions;
export default HeaderSlice.reducer;