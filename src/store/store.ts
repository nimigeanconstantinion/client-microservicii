import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import queryMapStocSlice from './queryMapStocOptim/queryMapStocOpt.reducer'
import comMapStocSlice from './comMapStocOptim/comMapStocOptim.reducer'
import authSlice from './authorization/auth.reducer'
// const persistConfig = {
//     key: 'queryMapStocState',
//     storage,
// }
//
// const persistedReducerMapStocOptim = persistReducer(persistConfig, queryMapStocSlice);


// const store = configureStore({
//     reducer: {
//         queryMapStocState: persistedReducerMapStocOptim,
//     },
//     middleware: [thunk]
// })

const store=configureStore({
    reducer:{
        queryMapStocState:queryMapStocSlice,
        comMapStocState:comMapStocSlice,
        loginAuthState:authSlice
    },
    middleware:[thunk],
    // devTools: false
})

export default store;
// export const persistor = persistStore(store);