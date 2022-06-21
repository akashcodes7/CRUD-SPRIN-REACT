import axios from "axios";

const REST_API = "http://localhost:8080/employee/get/";

class Services{
    getEmployee(id){
       return axios.get(REST_API+id)
    }
}
export default new Services();