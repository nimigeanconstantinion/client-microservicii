import MapStocOtim from "../../models/MapStocOtim";
import MapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface QueryMapStocOptimState{
    queryMapList: MapStocOtim[],
    statusRetrieve: MapStocOptimStatus,
    statusEmpty: MapStocOptimStatus,
    totalObjects: number,
}

const QueryMapStocOptimInitialState: QueryMapStocOptimState = {
    queryMapList: [],
    statusRetrieve: MapStocOptimStatus.NONE,
    statusEmpty: MapStocOptimStatus.NONE,
    totalObjects: 0,
}

const queryMapStocSlice = createSlice({

    name: 'load',
    initialState: QueryMapStocOptimInitialState,
    reducers: {
        loadMapStocList(state,action : PayloadAction<MapStocOtim[]>){
            state.queryMapList=action.payload
        },
        retrieveMapStocListLoading(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.LOADING
        },
        retrieveMapStocListError(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.ERROR
        },
        retrieveMapStocListSucces(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.SUCCESS

        },

        setTotalObjects(state,action:PayloadAction<number>){
            state.totalObjects=action.payload;
        }
    }
});

export const {loadMapStocList,retrieveMapStocListLoading,retrieveMapStocListSucces,retrieveMapStocListError,setTotalObjects}=queryMapStocSlice.actions;
export default queryMapStocSlice.reducer;