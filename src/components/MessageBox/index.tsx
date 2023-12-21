import React, {useEffect, useState} from "react";


interface MsgProps{
    type: string|null,
    title: string|null,
    message: string|null,
    isVisible:boolean
}

const MsgBox:React.FC<MsgProps>=({type,title,message,isVisible})=>{

    const [typeMsg,SetTypeMsg]=useState(type);
    const [msgTitle,SetMsgTitle]=useState(title);
    const [msg,SetMsg]=useState(message);
    const [show,SetShow] =useState(isVisible);
    // useEffect(()=>{
    //     console.log("sunt in msgbox")
    //     SetTypeMsg(type!);
    //     SetMsgTitle(title!);
    //     SetMsg(message!);
    //     SetShow(isVisible);
    // },[])


    return(
        <>

                    <div className={`alert alert-dismissible ${type} fade-in-out ${isVisible ? 'visible' : ''}`}>
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <h4 className="alert-heading">{title}</h4>
                        <p className="mb-0">{message}</p>
                    </div>


        </>
    )

}

export default MsgBox;