import axios from "axios"

export default class CompanySectorService{

    getCompanySectors(){
        return axios.get("http://localhost:8080/api/companysectors/getall")
    }
}