import MapStocOtim from "../../models/MapStocOtim";
import GridRow from "../GridRow/GridRow";
import {useEffect, useState} from "react";
import {WrapperGrdStyle} from "./WrapperGrdStyle";


interface GridProp{
    listMap:MapStocOtim[]|null,
    maxPag:number,
    crtPag:number,
    crtGrp:number,
    selRec:Function|undefined|null,
    prevI:number,
    focusRec:Function


}


const Index:React.FC<GridProp>=({listMap,maxPag,crtPag,crtGrp,selRec,focusRec,prevI})=>{

    const [wrkList,setWrkList]=useState<MapStocOtim[]|null>([]);
    const [focusRow,SetFocusRow]=useState<number>(0);
    const [isDlt,setIsDlt]=useState(false);
    const [prevR,setPrevR]=useState(0);

    useEffect(()=>{
                console.log("--Lista din GridComp");
                setWrkList(listMap);
                SetFocusRow(1);
    },[]);


    useEffect(()=>{
        console.log("----DIN GRID FocusRow:"+focusRow);
        console.log("Previ="+prevI);

    },[focusRow]);


    let selRow=(newArt:MapStocOtim)=>{
        console.log("Din Grid=");
        console.log(newArt);
        if(selRec!=null&&selRec!=undefined){
            selRec(newArt);

        }
    }

    let selDelID=(idD:number)=>{
        console.log("Raspuns din Grid ai selectat indexd="+(idD));
        const prv=focusRow;

        console.log("Previous ="+focusRow);
        let randuri:HTMLCollection=document.getElementsByClassName("itnr");
        const elem:Element|null=randuri.item(prv-1);
        console.log(Array.from(randuri).filter(a=>{
            if(a.textContent!=null&&parseInt(a.textContent.trim())==prv){
                if(prv!=idD){

                    a.classList.remove("seldel");}
                return true;
            }
            return false;
        }));

       // console.log(elem!.textContent);
       //  if(elem!=null){
       //      elem.classList.remove("seldel");
       //  }

        SetFocusRow(idD);
        focusRec(idD);

    }



    return(
        <>
            {
                listMap?(
                    <WrapperGrdStyle className={"divgrdcontainer"}>
                        {
                            listMap.map((m,index)=>{
                                return (
                                         <div>
                                             {/*<hr className={"line"}/>*/}
                                             {
                                                 focusRow>0?(
                                                     <>
                                                         {
                                                             focusRow?(
                                                                 <GridRow key={"row."+(index+1)} art={m} nrcrt={index+1} selIndx={selRow} isdel={false} focusRec={selDelID} prevIndex={focusRow}/>

                                                             ):""
                                                             //     (
                                                             //     // <GridRow key={"row."+(index+1)} art={m} nrcrt={index+1} selIndx={selRow} isdel={false} focusRec={selDelID} prevIndex={focusRow}/>
                                                             //
                                                             // )
                                                         }


                                                     </>

                                                 ):""
                                             }
                                         </div>

                                )
                            }).filter((m,index)=>{
                                return index>=(crtPag-1)*100&&index<=crtPag*100-1}
                            )

                        }


                    </WrapperGrdStyle>

                ):""


            }

        </>
    )
}

export default Index;