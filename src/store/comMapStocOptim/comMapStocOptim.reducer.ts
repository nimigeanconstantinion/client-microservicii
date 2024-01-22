import MapStocOtim from "../../models/MapStocOtim";
import MapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// import index from "../../components/OverlayMess";

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

    name: 'StoreCommand',
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
        updateMapStocWk(state,action:PayloadAction<MapStocOtim>){
            state.workingMap=action.payload
        },
        retriveTotalObjects(state,action:PayloadAction<number>){
            state.totalObjects=action.payload
        },
        updMapElem(state,action:PayloadAction<MapStocOtim>){
                let nrElem=state.comMapList.map((a,index)=>{
                    if(a.id==action.payload.id){
                        return index
                    }
                    return -1
                }).filter(a=>a>=0)[0];

                state.comMapList[nrElem]=action.payload;


        },
        delMapElement(state,action:PayloadAction<string>){
            let elem:MapStocOtim|null=state.comMapList.filter(a=>a.idIntern.trim()===action.payload.trim())[0];
            if(elem!=null){

                let indx=state.comMapList.indexOf(elem);


                state.comMapList.splice(indx,1);

            }
        }


    }})

export const {loadComMapStocList,retrieveComMapStocListLoading,retrieveComMapStocListSucces,retrieveComMapStocListError,retriveTotalObjects,updateMapStocWk,updMapElem,delMapElement}=comMapStocSlice.actions;

export default comMapStocSlice.reducer