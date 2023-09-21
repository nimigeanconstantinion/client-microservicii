import ResponseImpl from "./models/ResponseImpl";
import MapStocOtim from "./models/MapStocOtim";
import HttpResponse from "./models/HttpResponse";


export default class Api{
    api<T, U>(path: string, method = "GET", body: U): Promise<HttpResponse<T>> {

        const url = path;

        const options: RequestInit = {
            method,
            mode: 'cors',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },


            body: body == null ? null : JSON.stringify(body)
        }
        return fetch(url, options)
    }


    queryGetAllMapStoc = async (): Promise<MapStocOtim[]> => {

        let data = await this.api("http://localhost:8080/api/v1/server/qallmap", "GET", null);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }

    comGetAllMapStoc = async (): Promise<MapStocOtim[]> => {

        let data = await this.api("http://localhost:8080/api/v1/server/comallmap", "GET", null);
        if(data.status===200){
            return await data.json();
        }else {
            return Promise.reject([]);
        }

    }


    bulkAddMapStoc = async (newProd:MapStocOtim[]): Promise<boolean> => {

        let data = await this.api("http://localhost:8080/api/v1/server/addbulk", "POST", newProd);
        if(data.status===200){
            return data.json();
        }else {
            return Promise.reject([]);
        }

    }

}