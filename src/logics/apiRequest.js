import axios from "axios";
import Firebase from '../Firebase'


const apiRequest = async (method, api, data, contentType, isAuth) => {
    let apiConfig;
    let apiUrl;
    if(process.env.NODE_ENV === 'production') {
        apiUrl = 'https://us-central1-artbid-database.cloudfunctions.net/webApi/';
    }
    else {
        apiUrl = 'https://us-central1-artbid-db-dev.cloudfunctions.net/webApi/';
    }

    if(isAuth) {
        const user = Firebase.auth().currentUser
        const token = await user.getIdToken()
        const url = 'protectedApi/' + api
        apiConfig = {
            method: method,
            url: apiUrl + url,
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'authorization':'Bearer '+token
            },
            data: data
        }
    }
    else {
        const url = 'unprotectedApi/' + api
        apiConfig = {
            method: method,
            url: apiUrl + url,
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
            },
            data: data
        }
    }

    return axios(apiConfig);
}

export default apiRequest
