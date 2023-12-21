import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import User from "../../models/User";
import AuthStatus from "../../models/statuses/AuthStatus";

export interface AuthState{
    loadStatus:AuthStatus,
    targetUser:User|null,
    token:string|null
}

const AuthStateInitialState: AuthState = {
    loadStatus:AuthStatus.NONE,
    targetUser:null,
    token:null
}

// export interface LoginPayload {
//     user: User,
//     token: string,
//     header:HttpResponse<any>|null
// }

const authSlice = createSlice({

    name: 'auth',
    initialState: AuthStateInitialState,
    reducers: {
        loginRequest(state, action: PayloadAction<void>) {
            state.loadStatus = AuthStatus.AUTHORIZING
        },
        loginSucces(state, action: PayloadAction<void>) {
            state.loadStatus = AuthStatus.SUCCESS
        },
        loginFail(state, action: PayloadAction<void>) {
            state.loadStatus = AuthStatus.FORBIDEN
        },
        loadAuthUser(state,action:PayloadAction<User>){

                state.targetUser=action.payload

        },
        loadToken(state,action:PayloadAction<string>){
            state.token=action.payload;
        },

        reInitiate(state,action:PayloadAction<void>){
          state=AuthStateInitialState;
        }

    }
});

export const {loginRequest,loginSucces,loginFail,loadToken,loadAuthUser,reInitiate}=authSlice.actions;
export default authSlice.reducer;