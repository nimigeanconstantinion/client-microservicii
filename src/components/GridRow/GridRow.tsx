import MapStocOtim from "../../models/MapStocOtim";
import {WrapperRowStyle} from "./GridRowStyle";
import {FormEvent, useEffect, useRef, useState} from "react";

interface RowProps{
    art:MapStocOtim,
    nrcrt:number,
    selIndx:Function,
    isdel:boolean,
    prevIndex:number,
    focusRec:Function

}

const GridRow:React.FC<RowProps>=({art,nrcrt,selIndx,isdel,focusRec,prevIndex})=>{

    const [isEven,setIsEven]=useState("");
    const inputValueRef = useRef<string>("");
    const [chColor,setChColor]=useState(0);
    const [suf,setSuf]=useState("");
    const [prevIndx,SetPrevIndx]=useState(0);

    useEffect(()=>{
        console.log("--DIN ROW prev="+prevIndex);
        if((nrcrt-1)%2==0){
            setIsEven(" even");
        }
        if(isdel){
            setSuf("seldel");
        }
    },[])


     useEffect(()=>{
         // console.log("!!!! Focus Row="+prevIndex);
        // setSuf("seldel");
     },[prevIndx])

    let chMapStOpt=(e:FormEvent<HTMLInputElement>)=>{

        console.log(e.currentTarget.value);
        art.nr_zile=parseInt(e.currentTarget.value);
        console.log(art);



    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // inputValueRef.current = event.target.value;
       // alert(event.currentTarget.value);
        inputValueRef.current=event.currentTarget.value;
        let nrz:number=parseInt(inputValueRef.current);
        console.log("Noul Art=");
        let newArt:MapStocOtim={
            id:art.id,
            idIntern:art.idIntern,
            articol:art.articol,
            grupa:art.grupa,
            categorie:art.categorie,
            id_furn:art.id_furn,
            furniz:art.furniz,
            nr_zile:nrz
        }
        selIndx(newArt);
    };


    let clkRow= (elm: React.MouseEvent<HTMLDivElement>)=>{
        console.log("DIN ROW Ati apasat pe produsul indexd="+nrcrt);

        if(elm.currentTarget.firstElementChild!=null){
            elm.currentTarget.firstElementChild.classList.add("seldel");
            console.log(elm.currentTarget.firstElementChild)
        }
        // let elem=elm.currentTarget.classList.add("seldel")
        // setSuf("seldel");

        focusRec(nrcrt);
    }


    return(
        <>
            {
                art!=undefined&&art!=null?(
                    // <WrapperRowStyle>
                    <WrapperRowStyle onClick={(e)=>{clkRow(e)}}>
                        {/*<div key={nrcrt+".1"} className={"row crt "+isEven}>*/}
                        <p className={"itnr "+isEven+" "+suf} key={nrcrt+".p1"} >{(nrcrt)+"".trim()}</p>
                        {/*</div>*/}
                        {/*<div key={nrcrt+".2"} id={"idd"} className={"row idi"}>*/}
                        <input key={art.id+".cod"} className={"itid "+isEven} type={"text"} defaultValue={art.idIntern.trim()} disabled={true}/>

                        {/*</div>*/}
                        {/*<div key={nrcrt+".3"} className={"row den"+isEven}>*/}
                        {/*<p key={art.id+".pd"} className={"itart "+isEven}>{art.articol}</p>*/}
                        <input key={art.id+".pd"} className={"itart "+isEven} type={"text"} defaultValue={art.articol.trim()} disabled={true}/>

                        {/*</div>*/}
                        {/*<div key={nrcrt+".4"} className={"row grp"}>*/}
                        <input key={art.id+".grp"} className={"itgrp "+isEven} type={"text"} value={art.grupa.trim()} disabled={true}/>

                        {/*</div>*/}
                        {/*<div key={nrcrt+".5"} className={"row ctg"}>*/}
                        <input key={art.id+".ctg"} className={"itctg "+isEven} type={"text"} value={art.categorie.trim()} disabled={true}/>

                        {/*</div>*/}
                        {/*<div key={nrcrt+".6"} className={"row nrz"}>*/}
                        <input  key={art.id+".nrz"} className={"itnrz "+isEven} type={"text"} defaultValue={art.nr_zile}  onChange={handleInputChange}
                        />

                        {/*</div>*/}


                    </WrapperRowStyle>

                    // </WrapperRowStyle>
                ):""
            }
        </>
    )
}

export default GridRow