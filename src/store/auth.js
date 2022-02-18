import { createSlice} from '@reduxjs/toolkit';

const authInitialState = {isAuthenticate:false};

const authSlice = createSlice({
    name:"auth",
    initialState:authInitialState,
    reducers:{
        login(state){
           state.isAuthenticate = true; 
        },
        logout(state){
            state.isAuthenticate = false; 
        }
    }
});

export default authSlice.reducer;

export const authActions = authSlice.actions;