# API - getSearchSuggestions
#### Api to get suggestions on the basis of typed text.

------------------------

- ### Request Data Required :

  {  
  **_searchText_** : typed text ,  
  }

------------------

- ### Returns response :

  {  
  **_suggestions_** : snapshot list,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const getSearchSuggestions = async (searchText) => {
    const requestData = {
        searchText
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.GET_SEARCH_SUGGESTIONS, requestData, 'json', true);
    return response;
}
```