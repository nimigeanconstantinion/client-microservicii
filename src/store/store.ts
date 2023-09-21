import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import queryMapStocSlice from './queryMapStocOptim/queryMapStocOpt.reducer'
import comMapStocSlice from './comMapStocOptim/comMapStocOptim.reducer'

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
        comMapStocState:comMapStocSlice
    },
    middleware:[thunk]
})

export default store;
// export const persistor = persistStore(store);