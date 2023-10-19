
interface ConfirmBoxProps{
    message:string,
    responseFunction:Function
}


const Index:React.FC<ConfirmBoxProps>=({message,responseFunction})=>{

    let chooseClk=(nr:number)=>{
        if(nr!=undefined&&nr!=null){
            responseFunction(nr);
        }
    }

    return(
        <>
            <div className="alert alert-dismissible alert-danger">
                {/*<button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>chooseClk(0)} ></button>*/}
                <strong>Alert!!!</strong>
                <p>{message}</p>
                <div>
                    <button type="button" className="btn btn-outline-light" onClick={()=>chooseClk(1)}>Yes</button>
                    <button type="button" className="btn btn-outline-light" onClick={()=>chooseClk(0)}>No </button>

                </div>
            </div>
        </>
        );

}

export default Index;