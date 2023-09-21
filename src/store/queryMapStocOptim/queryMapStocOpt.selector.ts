import { createSelector } from "@reduxjs/toolkit";
import  {QueryMapStocOptimState} from "./queryMapStocOpt.reducer";


interface RootState {
    queryMapStocState:QueryMapStocOptimState,
}


const selectMapStocState = (state: RootState) => state.queryMapStocState;
const totObjState=(state:RootState)=>state.queryMapStocState.totalObjects;

export const selectQMapStocOpt=createSelector(
    selectMapStocState,
    (queryMapStocState):typeof queryMapStocState.queryMapList => queryMapStocState.queryMapList
)

export const selectRetrieveMapStocOptState=createSelector(
    selectMapStocState,
    (queryMapStocState):typeof queryMapStocState.statusRetrieve => queryMapStocState.statusRetrieve
);

export const selectTotObjSate=createSelector(
    selectMapStocState,

    (queryMapStocState):typeof queryMapStocState.totalObjects => queryMapStocState.totalObjects
);
