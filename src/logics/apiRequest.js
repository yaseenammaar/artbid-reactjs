import axios from "axios";
import Firebase from '../Firebase'

const apiRequest = async (method, api, data = {},contentType = "application/json") => {
    let apiConfig;
    let apiUrl;
    if(process.env.NODE_ENV === 'production') {
        apiUrl = 'https://us-central1-artbid-database.cloudfunctions.net/api/v1';
    }
    else {
        apiUrl = 'https://us-central1-artbid-db-dev.cloudfunctions.net/api/v1';
    }

    const user = await Firebase.auth().currentUser
    const token = await user.getIdToken()
    console.log(token)
    const url = apiUrl + api
    apiConfig = {
        method,
        url,
        headers: {
            'Content-Type': contentType,
            'authorization':'Bearer '+token,
        },
        data: data
    }

    return axios(apiConfig);
}

export default apiRequest
