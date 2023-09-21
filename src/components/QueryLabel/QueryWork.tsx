import {WrapperQuery} from "./QueryWorkStyle";
import {WrapperDinamicQuery} from "./QueryLabelDinamicStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardQuestion} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import {faEdit,faPlus,faMinus,faArrowsLeftRight} from "@fortawesome/free-solid-svg-icons";

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';// icons

import { ContextMenu } from 'primereact/contextmenu';
import {MenuItem, MenuItemCommandEvent} from 'primereact/menuitem';



interface QueryProps{
    newIndex:number|undefined,
    clkFunction:Function
}


const QueryWorkReact:React.FC<QueryProps>=({newIndex,clkFunction})=>{

    const [showCaption,setShowCaption]=useState(0);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
    const cm = useRef<ContextMenu>(null);

    const menuItems:MenuItem[] = [
        {
            label: 'Sincronize',
            icon: <FontAwesomeIcon className={"icomen"} icon={faArrowsLeftRight}/>,
            command: (event) => handleMenuItemClick(event, 'Sync')
        }]
    let handleMenuItemClick=(event:MenuItemCommandEvent, item:string)=>{
        switch (item){
            case 'Sync':{
                    clkFunction('Sync')
              break;
            }

        }
    }

    let indexCaption=()=>{
        if(showCaption==0){
            setShowCaption(1);
        }else{
            setShowCaption(0);
        }
    }

    const showContextMenu = (event:any) => {

        event.preventDefault();
        setMenuPosition({ left: event.clientX, top: event.clientY });
        setMenuVisible(true);


    };

    const hideContextMenu = () => {
        setMenuVisible(false);
    };

    return(
        <>
            <ContextMenu model={menuItems} ref={cm} onHide={hideContextMenu} style={menuPosition} />

            <WrapperDinamicQuery text={newIndex?(newIndex):0} tag={"Query"} className={"divwork"}>

                <FontAwesomeIcon  className={"icon"} icon={faClipboardQuestion} onContextMenu={(e) =>  cm.current!.show(e)} />
                <div className={"notice"}><p className={"pind"} onMouseOver={indexCaption} onMouseOut={indexCaption}>{newIndex}</p></div>
                {
                    // showCaption>0?(<p className={"caption"}>Numar de produse noi in BD extern (nemapate)!</p>):""
                    showCaption>0?(<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip"
                                           data-bs-placement="right" data-bs-original-title="Tooltip on right"
                                        >Right</button>


                    ):""
                }

            </WrapperDinamicQuery>
        </>
    );
}

export default QueryWorkReact;