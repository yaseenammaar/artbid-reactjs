# API - uploadItem
#### Api to search items in database and fetch the results.

------------------------

- ### Request Data Required :

  {  
  **_limit_** :  number of items to send at a time,  
  **_startingDoc_** : doc from which the search should start now,  
  **_searchText_** : search text ,  
  **_method_** : 'search' or 'suggestion',  
  }

------------------

- ### Returns response :

  {  
  **_items_** : data object { docData: {...}, id: docId },  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400),     
  **_allItemsFetched_** : boolean,  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const getSearchResults = async (limit, startingDoc, searchText, method = "search") => {
    const requestData = {
        limit,         // default limit to fetch is 10
        startingDoc,   //keep it null to get results from starting
        searchText,    //required
        method         // search / suggestion
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.GET_SEARCH_RESULTS, requestData, 'application/json', true);
    return response;
}
```