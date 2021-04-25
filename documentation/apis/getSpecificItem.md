# API - getSpecificItems
#### Api to get any type of items from database.

------------------------

- ### Request Data Required :

  {  
  **_itemId_** :  doc id of the item to be fetched,  
  }

------------------

- ### Returns response :

  {  
  **_itemRes_** : {docData: {...}, id: ...},  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const getItems = async (itemId) => {
    const requestData = {
        itemId
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.GET_SPECIFIC_ITEM, requestData, 'application/json', true);
    return response;
}
```