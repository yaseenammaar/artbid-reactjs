import apiRequest from "../logics/apiRequest";

const runUploadItemsApi = async (uploadData = {}) => {
    const api = `/item`
    return await apiRequest('post', api, uploadData);
}

export default runUploadItemsApi