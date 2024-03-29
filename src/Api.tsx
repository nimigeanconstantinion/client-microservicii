import MapStocOtim from "./models/MapStocOtim";
import HttpResponse from "./models/HttpResponse";
import User from "./models/User";
// import {getEnvVariables} from "./utility/envUtils";
import {globalConfig, loadConfig} from './config/configLoader';
// let env = getEnvVariables();


export default class Api{

    api<T, U>(path: string, method = "GET", body: U,token:string|null): Promise<HttpResponse<T>> {


     //   const url ="/server"+ path;
        // const urll=process.env.NODE_ENV;
         alert("test deploy");
         alert(process.env.NODE_ENV)
        // const url=path;
        //atrntie
         const url="/server"+path;
         // alert("Caut in calea "+globalConfig!.apiUrl);
        // alert("si din env ="+urll);

        const options: RequestInit = {
            method,
            mode:"cors",
            headers:{
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: body == null ? null : JSON.stringify(body)
        }

        if (token !== null) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer `+token,
            };
        }
        return fetch(url, options)
    }

    // let config = useConfig();

    loadEnvVariables=async ()=>{
        try{
            await loadConfig();
            return process.env.NODE_ENV;
        }catch (e){

        }

    }

    queryGetAllMapStoc = async (tokenString:string): Promise<MapStocOtim[]> => {

        let data = await this.api("/qallmap", "GET", null,tokenString);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }

    comGetAllMapStoc = async (tokenString:string): Promise<MapStocOtim[]> => {

        let data = await this.api("/comallmap", "GET", null,tokenString);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }


    bulkAddMapStoc = async (newProd:MapStocOtim[],tokenString:string): Promise<boolean> => {

        let data = await this.api("/addbulk", "POST", newProd,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }

    updMapStoc = async (newProd:MapStocOtim,tokenString:string): Promise<boolean> => {

        let data = await this.api("/upd", "POST", newProd,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }
//todo trebuie scos server

    delMapStoc = async (delProd:string,tokenString:string): Promise<boolean> => {

        let data = await this.api("/del/"+delProd, "DELETE", null,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }

    login=async (user:User):Promise<User>=>{
        // let x=loadConfig()
        console.log("La LOGIN cu ");
            console.log(process.env.REACT_APP_PATH_TO);
            console.log(process.env.NODE_ENV);
         let response:HttpResponse<string>=await this.api("/login","POST", user,null);
        // let response:HttpResponse<string>=await this.api("http://localhost:8080/api/v1/server/login","POST", user,null);

        if(response.status===200){

             return response.json();
        }else{

             return Promise.reject("Eroare de logare")
        }

    }

    register=async (user:User):Promise<string>=>{
        let response:HttpResponse<string>=await this.api<string,User>("/register","POST", user,null);

        if(response.status===200){

            return response.text();
        }else{

            return Promise.reject("Register Error!!")
        }

    }


    // directqueryGetAllMapStoc = async (tokenString:string): Promise<MapStocOtim[]> => {
    //
    //     let data = await this.api("/direct", "GET", null,tokenString);
    //     if(data.status===200){
    //         return await data.json();
    //     }else {
    //         return Promise.reject([]);
    //     }
    //
    // }


}