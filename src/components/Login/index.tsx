import React, {useEffect, useState} from "react";
import User from "../../models/User"
import Api from "../../Api";
import {selLoginRequest} from "../../store/authorization/auth.selector"
import {useDispatch, useSelector} from "react-redux";
import {loadAuthUser, loadToken, loginFail, loginRequest, loginSucces} from "../../store/authorization/auth.reducer"
import store from "../../store/store";
import AuthStatus from "../../models/statuses/AuthStatus";
import {WrapperLogin} from "./LoginStyle";
import MessageBox from "../MessageBox";


interface LoginProp{
    backFunction: Function
}
const Login:React.FC<LoginProp>=({backFunction}) => {
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
    const [msgTrigger,SetMsgTrigger]=useState(0);
    const [showMsg, SetShowMsg] = useState(false);
    const [typeMsg,SetTypeMsg]=useState("alert-warning");
    const [msg,SetMsg]=useState("");
    const [msgTitle,SetMsgTitle]=useState("");

    useEffect(()=>{
        console.log("In Login");
        // setUsr({email:"aaa@aaa",password:"aaa"})
        // dispatch(loginTest);

    },[])

    useEffect(()=>{
        console.log("In change");
        console.log(store.getState().loginAuthState.loadStatus)
    },[ch])

    let fLogin=async ()=>{
        console.log("In flogin "+ch)
        dispatch(loginRequest());
        console.log("Userul :")
        console.log(usr);
        let api=new Api();

        if(usr!=undefined&&usr.email!==""&&usr.password!=""){


            try{

                console.log("am apasat butonul login!!!!")


                let response=await api.login(usr);

                console.log("am iesit");
                let authUser:User=response as User;

                // console.log(authUser);
                setTkn(response.token!);
                dispatch(loadToken(response!.token!))
                dispatch(loadAuthUser(authUser))
                dispatch(loginSucces())
                SetMsgTrigger(1);
                SetTypeMsg("alert-success");
                SetMsg("Welcome "+authUser.name+" !!");
                SetMsgTitle("Succes!")
                SetShowMsg(true);
                setTimeout(()=>{
                    SetShowMsg(false);
                },1200)
            }catch (e) {
                console.log("Eroare la login");
                dispatch(loginFail())
                SetMsgTrigger(1);
                SetTypeMsg("alert-warning");
                SetMsg("Login Fail! Please Retry!");
                SetMsgTitle("Warning!")
                SetShowMsg(true);
                setTimeout(()=>{
                SetShowMsg(false);
                },1200)

            }

        }else{
                SetMsgTrigger(1);
                SetTypeMsg("alert-warning");
                SetMsg("Login Fail! Retry!");
                SetMsgTitle("WARNING !!!")
                SetShowMsg(true);

                setTimeout(()=>{
                    console.log("-----------------------------innnnn  err")
                    SetShowMsg(false);
            },1200)
        }

    }

    let sclk=async ()=>{
        console.log("In clk");
        await fLogin();
        setCh(prevState => ++prevState)
    }

    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let what=e.target.id
        console.log("============================"+e.target.id);
        let chUser:User={
            name:null,
            email:eml,
            password:pass,
            role:null,
            token:null
        };
        if(what.includes("Eml")){
            setEml(prevState => e.target.value);
            chUser.email=e.target.value;
        }else{
            setPass(prevState => e.target.value);
            chUser.password=e.target.value;
        }

        setUsr(chUser);
        console.log(chUser);

    }

    let loginClk=async ()=> {
        try {
            await fLogin();
            backFunction();


        } catch (e) {

        }
    }

    let bkClk=()=>{
        backFunction();

    }

    return(
        <WrapperLogin>
            <div className={"divlogin"}>

                {
                    msgTrigger>=0?(
                         <>
                            <MessageBox type={typeMsg} title={msgTitle} message={msg} isVisible={showMsg}/>

                         </>
                    ):""
                }

                <form>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className={"form-control"} id="inputEml"
                                   aria-describedby="emailHelp" placeholder="Enter email" value={eml} onInput={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="inputPass"
                                   placeholder="Password" autoComplete="off" value={pass} onChange={handleChange}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={loginClk}>Login</button>
                        <button type="button" className="btn btn-info" onClick={bkClk}>Go back</button>

                    </fieldset>



                </form>
            </div>



          {/*</div>*/}
        </WrapperLogin>
    );
}

export default Login;