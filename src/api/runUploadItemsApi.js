import apiRequest from "../logics/apiRequest";
import APIS from "../constants/Apis";


// const runUploadImageItemsApi = async (file) => {
//     const ref = firebaseInstance.storage().ref();

//     const name = (+new Date()) + '-' + file.name;



  

// }


const runUploadItemsApi = async (uploadData = {}) => {

    try {
        const res = await apiRequest('post', APIS.PROTECTED_APIS.ITEM_UPLOAD, uploadData, 'application/json', true);
        console.log(res)
        return res.data
    } catch (e) {
        console.log(e.message)
    }

}

export default runUploadItemsApi