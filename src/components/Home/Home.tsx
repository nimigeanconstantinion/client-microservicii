import {useDispatch,useSelector} from "react-redux";
import {useEffect, useState} from "react";


import {
    selectQMapStocOpt,
    selectTotObjSate,
    selectRetrieveMapStocOptState
} from "../../store/queryMapStocOptim/queryMapStocOpt.selector";
import Api from "../../Api";
import MapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";
import mapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";
import {
    loadMapStocList, retrieveMapStocListError,
    retrieveMapStocListLoading,
    retrieveMapStocListSucces,setTotalObjects
} from "../../store/queryMapStocOptim/queryMapStocOpt.reducer";
import store from "../../store/store";
import QueryWork from "../QueryLabel/QueryWork";
import {WrapperHome} from "./HomeStyle";
import {loadCMDMap} from "../../store/comMapStocOptim/comMapStocOptim.selector";
import {loadComMapStocList,retriveTotalObjects,retrieveComMapStocListError,retrieveComMapStocListLoading,retrieveComMapStocListSucces} from "../../store/comMapStocOptim/comMapStocOptim.reducer";
import ComWork from "../QueryLabel/ComWork";
import MapStocOtim from "../../models/MapStocOtim";
import spinner from "../../Images/spinner.gif"

const Home:React.FC=()=>{
    // noinspection SpellCheckingInspection
    let qMapStocList = useSelector(selectQMapStocOpt);
    let cMapStocList=useSelector(loadCMDMap);
    const [newObLst,setNewObLst]=useState<MapStocOtim[]>([]);
    const [spin,setSpin]=useState(0);
    let totObj=useSelector(selectTotObjSate);
    let totComObj=useSelector(retriveTotalObjects);
    const [comTotObj,setComTotObj]=useState(0);
     const [totOb,setTotob]=useState(0);
     let qRetrieve=useSelector(selectRetrieveMapStocOptState)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(qRetrieve==MapStocOptimStatus.NONE){
            qLoad();
        }
    },[])

    let handleContextMenuClk=(item:string)=>{
            switch (item){
                case "Sync":{
                    bulkAdd();
                    break;
                }
            }
    }

    let bulkAdd=async ():Promise<void>=>{
            let api=new Api();

            if(newObLst.length>0){
                setSpin(1);
                let addList= newObLst.map(e=>{
                    let ch:MapStocOtim={
                        id:null,
                        idIntern:e.idIntern,
                        articol:e.articol,
                        grupa:e.grupa,
                        categorie:e.categorie,
                        furniz:e.furniz,
                        id_furn:e.id_furn,
                        nr_zile:e.nr_zile
                    }
                    return ch

                }) ;

                if(addList!=null&&addList.length>0){
                     let resp=await api.bulkAddMapStoc(addList);
                    console.log(addList);
                     if(resp=true){
                         try{
                             let rez=await api.comGetAllMapStoc();

                             dispatch(loadComMapStocList(rez));
                             setNewObLst([]);
                             setComTotObj(rez.length);
                             getListNews();
                             setSpin(0);
                         }catch (e){

                         }


                     }
                }

            }



    }

    let qLoad=async ()=>{
        let api=new Api();
        setSpin(1);
        dispatch(retrieveMapStocListLoading())
        try {
            let res = await api.queryGetAllMapStoc();
            dispatch(retrieveMapStocListSucces());
            dispatch(loadMapStocList(res));
            const n:number=40;
            dispatch(setTotalObjects(res.length));
            setTotob(res.length)

            let comresp=await api.comGetAllMapStoc();
            dispatch(loadComMapStocList(comresp));
            setComTotObj(comresp.length);
            getListNews();
            setSpin(0);
        } catch (error) {
            console.log(error);
            dispatch(retrieveMapStocListError());
        }
    }

    let getListNews=async ():Promise<void>=>{
        console.log("Am intrat");

        let qlst:MapStocOtim[]=store.getState().queryMapStocState.queryMapList;
        let clst:MapStocOtim[]=store.getState().comMapStocState.comMapList;

        console.log("--------------------");
        console.log(qlst);
        console.log(clst);

        let rezLst=qlst.filter(v=>{


           let vl:number=clst.map(t=>t.idIntern.trim()).filter(k=>{
           return  k===v.idIntern.trim()

           }).length;
           return vl==0;
        });

        if(rezLst.length>0){
            console.log("Size ="+rezLst.length);
            setNewObLst(rezLst)

        }

    }

    return (
        <WrapperHome>
            <div className={"aside"}>

                <p className={"leftTitle"}>Lista de articole</p>
                {/*{*/}
                {/*    qMapStocList.length>0?(*/}
                {/*        qMapStocList.map(m=>{return (<p>{m.articol}</p>)})*/}
                {/*    ):""*/}
                {/*}*/}
                <div className={"divwk"}>
                    <QueryWork newIndex={newObLst.length} clkFunction={handleContextMenuClk}/>
                    <ComWork newIndex={comTotObj}/>
                </div>
            </div>
            <div className={"main"}>


                <p>Client MicroServicii</p>
                {
                    spin>0?(
                        <>
                            <img className={"imgg"} src={spinner} alt="My GIF" />

                        </>
                    ):""

                }
                <button type={"button"} className={"btn btn-secondary"} data-bs-toggle={"tooltip"}
                        data-bs-placement={"right"} data-bs-original-title={"Tooltip on right"}
                >Test toogle Dreapta</button>
            </div>


        </WrapperHome>
    )
}


export default Home;
