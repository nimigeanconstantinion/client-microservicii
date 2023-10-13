import MapStocOtim from "../../models/MapStocOtim";
import GridRow from "../GridRow/GridRow";
import {useEffect, useState} from "react";
import {WrapperRowStyle} from "../GridRow/GridRowStyle";
import {WrapperGrdStyle} from "./WrapperGrdStyle";


interface GridProp{
    listMap:MapStocOtim[]|null,
    maxPag:number,
    crtPag:number,
    crtGrp:number,
    selRec:Function|undefined|null

}


const Index:React.FC<GridProp>=({listMap,maxPag,crtPag,crtGrp,selRec})=>{

    const [wrkList,setWrkList]=useState<MapStocOtim[]|null>([]);

    useEffect(()=>{
                console.log("--Lista din GridComp");
                setWrkList(listMap);
    },[]);

    let selRow=(newArt:MapStocOtim)=>{
        console.log("Din Grid=");
        console.log(newArt);
        if(selRec!=null&&selRec!=undefined){
            selRec(newArt);

        }
    }

    return(
        <>
            {
                listMap?(
                    <WrapperGrdStyle className={"divgrdcontainer"}>
                        {
                            listMap.map((m,index)=>{
                                return (
                                         <WrapperRowStyle>
                                            <GridRow key={"row."+(index+1)} art={m} nrcrt={index+1} selIndx={selRow}/>
                                         </WrapperRowStyle>

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