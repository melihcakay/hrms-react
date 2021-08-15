import axios from "axios";

export default class AuthService {

    registerCandidate(passwordAgain, candidate) {
        return axios.post(`http://localhost:8080/api/auth/registerCandidate?confirmPassword=${passwordAgain}`, candidate)
    }


}