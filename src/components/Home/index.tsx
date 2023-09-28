import {useDispatch, useSelector} from "react-redux";
import {
    selectQMapStocOpt,
    selectRetrieveMapStocOptState,
    selectTotObjSate
} from "../../store/queryMapStocOptim/queryMapStocOpt.selector";
import {loadCMDMap} from "../../store/comMapStocOptim/comMapStocOptim.selector";
import React, {useEffect, useState} from "react";
import MapStocOtim from "../../models/MapStocOtim";
import {loadComMapStocList, retriveTotalObjects} from "../../store/comMapStocOptim/comMapStocOptim.reducer";
import Api from "../../Api";
import {
    loadMapStocList, retrieveMapStocListError,
    retrieveMapStocListLoading,
    retrieveMapStocListSucces, setTotalObjects
} from "../../store/queryMapStocOptim/queryMapStocOpt.reducer";
import store from "../../store/store";
import WrapperTest from "../Test/TestStyle";
import spinner from "../../Images/spinner.gif"
import WrapperNewHome from "./IndexStyle";
import GridRow from "../GridRow/GridRow";


const Homes:React.FC=()=> {
    let qMapStocList = useSelector(selectQMapStocOpt);
    let cMapStocList=useSelector(loadCMDMap);
    const [newObLst,setNewObLst]=useState<MapStocOtim[]>([]);
    const [spin,setSpin]=useState(0);
    const [showGrd,setShowGrd]=useState(0);
    const [totPag,setTotPag]=useState<number[]>([]);
    const [grupPag,setGrupPag]=useState(1);
    const [wkLst,setWkLst]=useState<MapStocOtim[]>([]);
    let totObj=useSelector(selectTotObjSate);
    let totComObj=useSelector(retriveTotalObjects);
    const [comTotObj,setComTotObj]=useState(0);
    const [totOb,setTotob]=useState(0);
    let qRetrieve=useSelector(selectRetrieveMapStocOptState)
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("Am intrat");

    },[])


    let qLoad=async ()=>{
        console.log("Sunt in qLoad");
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
            await getListNews();
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

        if(rezLst.length>=0){
            console.log("Size ="+rezLst.length);
            setNewObLst(rezLst)

        }

    }


    let bulkAdd=async (nLst:MapStocOtim[]|undefined):Promise<void>=>{
        let api=new Api();

        if(nLst!=undefined&&nLst.length>0){
            setSpin(1);
            let addList= nLst.map(e=>{
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
                setSpin(1);
                try{

                    let respp:boolean=await api.bulkAddMapStoc(addList);

                   try{

                       let r=await qLoad();
                   }catch (e) {

                   }
                }catch (e) {

                }
                // console.log(addList);
                // if(respp=true){
                //     try{
                //         let rez=await api.comGetAllMapStoc();
                //
                //         dispatch(loadComMapStocList(rez));
                //         setNewObLst([]);
                //         setComTotObj(rez.length);
                //         getListNews();
                //         setSpin(0);
                //     }catch (e){
                //         console.log("EROARE ADD!");
                //     }
                //
                //
                // }
            }else{
                console.log("Lista de sync goala");
            }

        }



    }


    let synchro=async ():Promise<void>=>{
       console.log("In sincr");
       console.log(newObLst);

        await bulkAdd(newObLst);
    }


    let showGrid=()=>{
        setWkLst(cMapStocList);
        let wKL=store.getState().comMapStocState.comMapList;
        let nrP=Math.floor(wKL.length/100);
        for(let i=1;i<=nrP;i++){
            setTotPag(prevState =>  [...prevState,i])
        }
        setGrupPag(2);


        setShowGrd(1);

    }

    return (
        <>
            <WrapperNewHome>
                <div className={"aside"}>
                    <div className={"commands"}>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">MicroServices</a>
                            </li>

                            <li className="nav-item qsrv">
                                {/*<a className="nav-link" href="#">Link</a>*/}
                                <div className={"divcc"}>
                                    <div className={"divff"}>
                                        <div className={"dfrontt"}>
                                            <p>Query Action</p>

                                        </div>
                                        <div className={"dbackk"}>
                                            <button type="button" className="btn btn-danger" onClick={qLoad}>Refresh List</button>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">Comm Actions</a>
                                <div className="dropdown-menu">
                                    <h6 className="dropdown-header">Actions</h6>
                                    <a className="dropdown-item" href="#" onClick={synchro} >Syncronize</a>
                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item" href="#" onClick={showGrid}>Show All Products</a>
                                    <a className="dropdown-item" href="#">Empty DB</a>
                                    {/*<a className="dropdown-item" href="#">Separated link</a>*/}
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>

                        </ul>
                    </div>




                </div>
                <div className={"main"}>
                    <div className={"serv"}>
                        <div className={"divcq"}>
                            <div className={"divfq"}>
                                <div className="dfrontq">
                                    <div className="card-header">Query Service</div>
                                    <div className="card-body">
                                        <p className="card-text">Query Products DB from external source.</p>

                                    </div>
                                </div>
                                <div className="dbackq">
                                    <div className="card-header">Status Info</div>
                                    <div className="card-body">
                                        <p className="card-text">We have <span
                                            className="badge bg-primary rounded-pill" >{newObLst.length}</span> products unsynchronized
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className={"divcq"}>
                            <div className={"divfq"}>
                                <div className={"dfrontq"}>
                                    <div className={"card-header"}>Command Service</div>
                                    <p>This started some actions over an owned DB with declared purpose of
                                        exercising </p>

                                </div>
                                <div className={"dbackq cmddiv"}>
                                    <div className={"card-header"}>Status Info</div>
                                    <p>Owned DB contains <span
                                        className="badge bg-primary rounded-pill">{comTotObj}</span> products</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    {
                        spin>0?(
                            <>
                                <img className={"imgspin"} src={spinner} alt="My GIF" />

                            </>
                        ):""

                    }
                    {
                        showGrd>0?(
                          <>
                              <div className={"divpag"}>
                                  <ul className="pagination">
                                      <li className="page-item disabled">
                                          <a className="page-link" href="#">&laquo;</a>
                                      </li>
                                      {
                                          totPag.filter((p,index)=>index>=(grupPag-1)*20&&index<grupPag*20).map(p=>{
                                              return(

                                                  <li className="page-item active">
                                                      <a className="page-link" href="#">{p}</a>
                                                  </li>

                                              )

                                          })
                                      }
                                      {
                                          grupPag*20<totPag.length?(
                                              <>
                                                  <li className="page-item active">
                                                      <a className="page-link" href="#">...</a>
                                                  </li>
                                              </>

                                          ):""

                                      }

                                      <li className="page-item">
                                          <a className="page-link" href="#">&raquo;</a>
                                      </li>
                                  </ul>
                              </div>


                          </>

                        ):""
                    }

                </div>
                <div className={"footeras"}>
                   <p>
                       Educational&Training App
                   </p>
                </div>


            </WrapperNewHome>

        </>
    )
}

export default Homes;