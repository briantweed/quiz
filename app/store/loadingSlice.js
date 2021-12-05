import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    status: false
}


export const loadingSlice = createSlice({

    name: "loading",

    initialState,

    reducers: {
        enable: (state) => {
            state.status = true
        },

        disable: (state) => {
            state.status = initialState.status
        }
    }

})


export const { enable: enableLoading, disable: disableLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
