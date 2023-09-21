import MapStocOtim from "../../models/MapStocOtim";
import MapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ComMapStocOptimState{
    comMapList: MapStocOtim[],
    workingMap:MapStocOtim|null,
    statusRetrieve: MapStocOptimStatus,
    totalObjects: number,
}

const ComMapStocOptimInitialState: ComMapStocOptimState = {
    comMapList: [],
    workingMap:null,
    statusRetrieve: MapStocOptimStatus.NONE,
    totalObjects: 0,
}

const comMapStocSlice = createSlice({

    name: 'load',
    initialState: ComMapStocOptimInitialState,
    reducers: {
        loadComMapStocList(state,action : PayloadAction<MapStocOtim[]>) {
            state.comMapList = action.payload
        },
        retrieveComMapStocListLoading(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.LOADING
        },
        retrieveComMapStocListSucces(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.SUCCESS
        },
        retrieveComMapStocListError(state,action:PayloadAction<void>){
            state.statusRetrieve=MapStocOptimStatus.ERROR
        },
        updateMapStocList(state,action:PayloadAction<MapStocOtim>){
            state.workingMap=action.payload
        },
        retriveTotalObjects(state,action:PayloadAction<number>){
            state.totalObjects=action.payload
        }

    }})

export const {loadComMapStocList,retrieveComMapStocListLoading,retrieveComMapStocListSucces,retrieveComMapStocListError,retriveTotalObjects}=comMapStocSlice.actions;

export default comMapStocSlice.reducer