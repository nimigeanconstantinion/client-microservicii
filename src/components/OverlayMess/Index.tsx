import React, {ReactElement} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

interface TooltipProps{
    message:string,
    divEl:ReactElement

}

const Index:React.FC<TooltipProps>=({message,divEl})=>{

    const tooltip = (
        <Tooltip id="tooltip">
            <strong>{message}</strong> Check this info.
        </Tooltip>
    );

    return(
        <OverlayTrigger placement="top" overlay={tooltip}>
            {/*<button type="button" className="btn btn-primary">*/}
            {/*    {btnText}*/}
            {/*</button>*/}
            {divEl}
        </OverlayTrigger>

    );

}

export default Index;