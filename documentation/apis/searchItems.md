# API - uploadItem
#### Api to search items in database.

------------------------

- ### Request Data Required :

  {  
  **_limit_** :  number of items to send at a time,  
  **_startingDoc_** : doc from which the search should start now,  
  **_searchTag_** : search tag ,
  }

------------------

- ### Returns response :

  {  
  **_items_** : snapshot list,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const searchItems = async (limit, startingDoc, searchTag) => {
    const requestData = {
        limit,
        startingDoc, 
        searchTag
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.SEARCH_ITEMS, requestData, 'application/json', true);
    return response;
}
```