import apiRequest from "./apiRequest";
import APIS from "../constants/Apis";
import firebaseInstance from "../Firebase/index";

const runUploadItemsApi = async (uploadData) => {

    try {

        const requestData = {
            available_state: "All",
            base_price: 4500,
            by_user: "Test",
            caption: "Caption New",
            category: "Education",
            closing_date: "14",
            closing_time: "6PM",
            status: 0,
            title: "We are going insance",
            featured_image: "URL",
            supporting_images: ["URL", "URL", "URL"],
            state: "Delhi"
        };

        const res = await apiRequest('post', APIS.PROTECTED_APIS.ITEM_UPLOAD, requestData, 'application/json', true);
        console.log(res)
        return res.data
    } catch (e) {
        console.log(e.message)
    }

}

export default runUploadItemsApi