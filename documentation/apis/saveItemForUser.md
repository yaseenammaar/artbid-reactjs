# API - saveItemForUser
#### Api to save item for a user.

------------------------

- ### Request Data Required :

  {  
  **_item_id_** : id of item to be saved for current user,  
  }

------------------

- ### Returns response :

  {  
  **_writeRes_** : firestore write response,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const saveItemForUser = async (item_id) => {
    const requestData = {
        item_id
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.SAVE_ITEM_FOR_USER, requestData, 'application/json', true);
    return response;
}
```