import {createSelector} from "@reduxjs/toolkit";
import {ComMapStocOptimState} from "./comMapStocOptim.reducer";

interface RootState {
    comMapStocState:ComMapStocOptimState
}

const cMapStocState = (state: RootState) => state.comMapStocState;

export const loadCMDMap=createSelector(
    cMapStocState,
    (comMapStocState):typeof comMapStocState.comMapList => comMapStocState.comMapList
);



export const selectRetrieveComMapStocOptState=createSelector(
    cMapStocState,
    (comMapStocState):typeof comMapStocState.statusRetrieve => comMapStocState.statusRetrieve
);

export const selectComTotalObjects=createSelector(
    cMapStocState,
    (comMapStocState):typeof comMapStocState.totalObjects=>comMapStocState.totalObjects
);

export const setUpdObj=createSelector(
    cMapStocState,
    (comMapStocState):typeof comMapStocState.workingMap=>comMapStocState.workingMap
);

export const updElementofList=createSelector(
    cMapStocState,
    (comMapStocState):typeof comMapStocState.comMapList=>comMapStocState.comMapList
);
