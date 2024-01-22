import {createSelector} from "@reduxjs/toolkit";
import {AuthState} from "./auth.reducer";


interface RootState {
    loginAuthState:AuthState
}

const loginRegisterState = (state: RootState) => state.loginAuthState;



export const selLoginRequest=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.loadStatus => loginAuthState.loadStatus
);
//
export const selLoginRequestSucces=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.loadStatus => loginAuthState.loadStatus
);

export const selLoginRegisterStatus=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.loadStatus => loginAuthState.loadStatus
);

export const selLoginRequestFail=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.loadStatus => loginAuthState.loadStatus
);

export const selLoadAuthUser=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.targetUser => loginAuthState.targetUser
);

export const selLoadAuthToken=createSelector(
    loginRegisterState,
    (loginAuthState):typeof loginAuthState.token => loginAuthState.token
);
