import axios from "axios";
import Firebase from '../Firebase'

const apiRequest = async (method, api, data = {},contentType = "application/json") => {
    let apiConfig;
    let apiUrl;
    if(process.env.NODE_ENV === 'production') {
        apiUrl = 'https://asia-south1-artbid-database.cloudfunctions.net/api/v1';
    }
    else {
        apiUrl = 'https://asia-south1-artbid-db-dev.cloudfunctions.net/api/v1';
    }

    let apiResData
    try {
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
            data: data,

        }

        const apiRes = await axios(apiConfig);
        console.log('successful api request ', apiRes)
        apiResData = apiRes.data
    } catch (e) {
        if(e.response) {
            console.error("error while fetching api :", apiUrl, e.response, e)
            apiResData = e.response.data
        }
        else {
            console.log('other error', e, e.error, e.message)
            apiResData = {
                error: e.message,
                isError: true,
                statusCode: null,
            }
        }

    }

    return apiResData

}

export default apiRequest
