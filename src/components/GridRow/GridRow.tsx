import MapStocOtim from "../../models/MapStocOtim";
import {WrapperRowStyle} from "./GridRowStyle";

interface RowProps{
    articol:MapStocOtim
}

const GridRow:React.FC<RowProps>=({articol})=>{

    return(
        <>
            {
                articol!=undefined&&articol!=null?(
                    <WrapperRowStyle>
                        <div>{articol.idIntern}</div>
                        <div>{articol.articol}</div>
                    </WrapperRowStyle>
                ):""
            }
        </>
    )
}

export default GridRow