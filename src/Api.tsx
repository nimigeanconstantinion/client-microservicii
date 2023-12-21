import ResponseImpl from "./models/ResponseImpl";
import MapStocOtim from "./models/MapStocOtim";
import HttpResponse from "./models/HttpResponse";
import User from "./models/User";
import {getEnvVariables} from "./utility/envUtils";

let env = getEnvVariables();


export default class Api{
    api<T, U>(path: string, method = "GET", body: U,token:string|null): Promise<HttpResponse<T>> {

        const url = path;

        const options: RequestInit = {
            method,
            mode: 'cors',
            headers:{
                "Content-Type": "application/json;charset=utf-8"
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


    queryGetAllMapStoc = async (tokenString:string): Promise<MapStocOtim[]> => {

        let data = await this.api("{env.REACT_APP_API_URL}/server/qallmap", "GET", null,tokenString);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }

    comGetAllMapStoc = async (tokenString:string): Promise<MapStocOtim[]> => {

        let data = await this.api("{env.REACT_APP_API_URL}/server/comallmap", "GET", null,tokenString);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }


    bulkAddMapStoc = async (newProd:MapStocOtim[],tokenString:string): Promise<boolean> => {

        let data = await this.api("{env.REACT_APP_API_URL}/server/addbulk", "POST", newProd,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }

    updMapStoc = async (newProd:MapStocOtim,tokenString:string): Promise<boolean> => {

        let data = await this.api("{env.REACT_APP_API_URL}/server/upd", "POST", newProd,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }


    delMapStoc = async (delProd:string,tokenString:string): Promise<boolean> => {

        let data = await this.api("{env.REACT_APP_API_URL}/server/del/"+delProd, "DELETE", null,tokenString);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }

    login=async (user:User):Promise<User>=>{

        let response:HttpResponse<string>=await this.api("http://edge/server/login","POST", user,null);
        // let response:HttpResponse<string>=await this.api("http://localhost:8080/api/v1/server/login","POST", user,null);

        if(response.status===200){

             return response.json();
        }else{

             return Promise.reject("Eroare de logare")
        }

    }

    register=async (user:User):Promise<string>=>{
        let response:HttpResponse<string>=await this.api("http://edge/server/register","POST", user,null);

        if(response.status===200){

            return response.text();
        }else{

            return Promise.reject("Register Error!!")
        }

    }

}