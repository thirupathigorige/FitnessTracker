import axios from "axios";

const Url="http://localhost:3000";

class Services{
    login(data){
        debugger;
        return axios.post(Url+"/Login", {data});
    }
}

export default Services;