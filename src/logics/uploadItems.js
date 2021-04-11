import apiRequest from "./apiRequest";
import APIS from "../constants/Apis";

const uploadItems = async (uploadData) => {

    try {

        const requestData = {
            available_state: uploadData.available_state,
            base_price: uploadData.base_price,
            by_user: uploadData.by_user,
            caption: uploadData.caption,
            category: uploadData.category,
            closing_date: uploadData.closing_date,
            closing_time: uploadData.closing_time,
            status: uploadData.status,
            title: uploadData.title,
            featured_image: uploadData.featured_image,
            supporting_images: uploadData.supporting_images,
        };

        const res = await apiRequest('post', APIS.PROTECTED_APIS.ITEM_UPLOAD, requestData, 'application/json', true);
        return res.data.suggestions

      
    } catch (e) {
        console.log(e.message)
    }

}

export default getSearchSuggestions