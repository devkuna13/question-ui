import axios from "axios";

export class ServerCall  {
    static sendGet(){

    }
    static sendPost(url,data){
        return axios.post(`${process.env.BACKEND_URL}${url}`,data)
    }
}