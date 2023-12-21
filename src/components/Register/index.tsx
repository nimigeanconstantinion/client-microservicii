import React, {ReactEventHandler, useEffect, useState} from "react";
import User from "../../models/User"
import Api from "../../Api";
import {selLoginRequest,selLoginRequestSucces,selLoginRequestFail,selLoadAuthUser,selLoadAuthToken,selLoginRegisterStatus} from "../../store/authorization/auth.selector"
import {useDispatch, useSelector} from "react-redux";
import {loginRequest,loginSucces,loginFail,loadToken,loadAuthUser} from "../../store/authorization/auth.reducer"
import store from "../../store/store";
import AuthStatus from "../../models/statuses/AuthStatus";
import MessageBox from "../MessageBox";
import {WrapperRegister} from "./RegisterStyle";


interface LoginProp{
    backFunction: Function
}
const Register:React.FC<LoginProp>=({backFunction}) => {
    // const user:User={
    //
    //     email:"aaa@aaa",
    //     password:"aaa"
    // };

    let authSt:AuthStatus=useSelector(selLoginRequest)
    const [ch,setCh]=useState(0)
    //
    //  let authState = useSelector(selLoginRequest);
    // let tknState=useSelector(selRegisterUser);
    const dispatch = useDispatch();
    // let qMapStocList = useSelector(selLoginRequest);


    const [tkn,setTkn]=useState<string>("");
    const [usr,setUsr]=useState<User>();
    const [eml,setEml]=useState<string>("");
    const [pass,setPass]=useState<string>("");
    const [name,setName]=useState<string>("");

    const [msgTrigger,SetMsgTrigger]=useState(0);
    const [showMsg, SetShowMsg] = useState(false);
    const [typeMsg,SetTypeMsg]=useState("alert-warning");
    const [msg,SetMsg]=useState("");
    const [msgTitle,SetMsgTitle]=useState("");

    useEffect(()=>{
        console.log("In Register");
        // setUsr({email:"aaa@aaa",password:"aaa"})
        // dispatch(loginTest);

    },[])

    useEffect(()=>{
        console.log("In change");
        console.log(store.getState().loginAuthState.loadStatus)
    },[ch])

    let register=async ()=>{
        console.log("In register "+ch)
        dispatch(loginRequest());

        let api=new Api();
        if(usr!=undefined&&usr.email!==""&&usr.password!=""){


            try{



                let response=await api.register(usr);

                console.log("am iesit");
                let authUser:User=usr;

                // console.log(authUser);
                setTkn(response);
                dispatch(loadToken(response))
                dispatch(loadAuthUser(authUser))
                dispatch(loginSucces())
                SetMsgTrigger(1);
                SetTypeMsg("alert-success");
                SetMsg("Welcome "+authUser.name+" !!");
                SetMsgTitle("Succes!")
                SetShowMsg(true);
                setTimeout(()=>{
                    SetShowMsg(false);
                },1100)
            }catch (e) {
                console.log("Eroare la login");
                SetMsgTrigger(1);
                dispatch(loginFail())
            }

        }else{
            SetMsgTrigger(1);
            SetTypeMsg("alert-warning");
            SetMsg("Login Fail! Retry!");
            SetMsgTitle("WARNING !!!")
            SetShowMsg(true);
            setTimeout(()=>{
                SetShowMsg(false);
            },1100)
        }

    }

    let sclk=async ()=>{
        console.log("In clk");
        await register();

        setCh(prevState => ++prevState)

    }

    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let what=e.target.id
        console.log("============================"+e.target.id);
        let chUser:User={
            name:name,
            email:eml,
            password:pass,
            role:"1",
            token:null
        };
        if(what.includes("Eml")){
            setEml(prevState => e.target.value);
            chUser.email=e.target.value;
        }else if(what.includes("Pass")){
            setPass(prevState => e.target.value);
            chUser.password=e.target.value;
        }else{
            setName(prevState => e.target.value)
            chUser.name=e.target.value;
        }
            chUser.role="1";

        setUsr(chUser);
        console.log(chUser);

    }

    let registerClk=async ()=> {
        try {
            await register();
            backFunction();
            // let elmColl=document.getElementsByClassName("divlogin");
            // let elmContainer=elmColl[0] as HTMLElement;
            //
            // setTimeout(()=>{
            //     elmContainer.style.display="none";
            //
            // },6100)

        } catch (e) {

        }
    }

    return(
        <WrapperRegister>
            <div className={"divlogin"}>

                {/*<div className={`alert alert-dismissible ${typeMsg} fade-in-out ${isVisible ? 'visible' : ''}`}>*/}
                {/*    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>*/}
                {/*    <h4 className="alert-heading">{msgTitle}</h4>*/}
                {/*    <p className="mb-0">{msg}</p>*/}
                {/*</div>*/}
                {
                    showMsg?(
                        <>
                            <MessageBox type={typeMsg} title={msgTitle} message={msg} isVisible={showMsg}/>

                        </>
                    ):""
                }

                <form>

                    <fieldset>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label mt-4">User Name</label>
                            <input type="text" className={"form-control"} id="inputName"
                                   placeholder="Enter User Name" value={name} onInput={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label mt-4">Email address</label>
                            <input type="email" className={"form-control"} id="inputEml"
                                   placeholder="Enter Email" value={eml} onInput={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="inputPass"
                                   placeholder="Password" autoComplete="off" value={pass} onChange={handleChange}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={registerClk}>Register</button>
                        <button type="button" className="btn btn-info" onClick={sclk}>Go back</button>

                    </fieldset>



                </form>
            </div>



            {/*</div>*/}
        </WrapperRegister>
    );
}

export default Register;