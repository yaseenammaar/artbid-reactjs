# API - getItems
#### Api to get any type of items from database.

------------------------

- ### Request Data Required :

  {  
  **_type_** :  type of operation (`1` - all items, `2` - trending items, `3` - single item)... only supports `1` right now,   
  **_limit_** : no of snapshots required,  
  **_last_snapshot_** : starting point for item fetch (`null` to start from start),  
  **_product_id_** : product id in case of `type 3`,  
  }

------------------

- ### Returns response :

  {  
  **_itemRes_** : document snapshot or snapshots,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const getItems = async (type, limit = 10, last_snapshot = null, product_id = null) => {
    const requestData = {
        type,
        limit,
        last_snapshot,
        product_id,
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.GET_ITEMS, requestData, 'json', true);
    return response;
}
```