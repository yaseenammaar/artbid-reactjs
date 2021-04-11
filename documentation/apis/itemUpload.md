# API - uploadItem
#### Api to upload a new item in the database.

------------------------

- ### Request Data Required :

  {  
  **_available_state_** :  default is 'All',  
  **_base_price_** : price,  
  **_by_user_** : user id ,  
  **_caption_** : caption string,  
  **_category_** : category string,  
  **_closing_date_** : date,  
  **_closing_time_** : time 
  **_state_** : state name,  
  **_status_** : status,  
  **_title_** : String,  
  **_featured_image_** : url of featured image,  
  **_supporting_images_** : Array of urls of images  
  }

------------------

- ### Returns response :

  {  
  **_itemRes_** : firestore write response,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const itemUpload = async (uploadData) => {
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
        state: uploadData.state,
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.ITEM_UPLOAD, requestData, 'application/json', true);
    return response;
}
```