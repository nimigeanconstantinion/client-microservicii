import {WrapperDinamicQuery} from "./QueryLabelDinamicStyle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCodeMerge} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

interface ComProps{
    newIndex:number|undefined
}


const ComWork:React.FC<ComProps>=({newIndex})=>{

    const [showCaption,setShowCaption]=useState(0);

    let indexCaption=()=>{
        if(showCaption==0){
            setShowCaption(1);
        }else{
            setShowCaption(0);
        }
    }
    return(
        <>
            <WrapperDinamicQuery text={newIndex?(newIndex):0} tag={"Com"} className={"divwork"}>
                <FontAwesomeIcon  className={"icon"} icon={faCodeMerge} />
                <div className={"notice"}><p className={"pind"} onMouseOver={indexCaption} onMouseOut={indexCaption}>{newIndex}</p></div>
                {
                    showCaption>0?(<p className={"caption"}>Numar de produse in BD productie!</p>):""
                }
            </WrapperDinamicQuery>
        </>
    );
}

export default ComWork;