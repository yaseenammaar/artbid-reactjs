import axios from "axios";
import Firebase from '../Firebase'


const apiRequest = async (method, api, data, contentType, isAuth) => {
    let apiConfig;
    let apiUrl;
    if(process.env.NODE_ENV === 'production') {
        apiUrl = 'https://us-central1-artbid-database.cloudfunctions.net/apiBetaV1/';
    }
    else {
        apiUrl = 'https://us-central1-artbid-db-dev.cloudfunctions.net/apiBetaV1/';
    }

    if(isAuth) {
        const user = await Firebase.auth().currentUser
        const token = await user.getIdToken()
        console.log(token)
        const url = 'protectedApi/' + api
        apiConfig = {
            method: method,
            url: apiUrl + url,
            headers: {
                'Content-Type': contentType,
                'authorization':'Bearer '+token,
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
