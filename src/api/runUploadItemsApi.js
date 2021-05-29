import apiRequest from "../logics/apiRequest";

const runUploadItemsApi = async (uploadData = {}) => {

    try {
        const api = `/item`
        const res = await apiRequest('post', api, uploadData);
        console.log(res)
        return res.data
    } catch (e) {
        console.log(e.message)
    }

}

export default runUploadItemsApi