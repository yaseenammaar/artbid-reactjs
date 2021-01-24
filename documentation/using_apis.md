# How to use Apis...

You may go to [../src/logics/apiRequest.js](../src/logics/apiRequest.js) file to see what are the urls for api and how this method is configured.  
However, you don't need to know the url or implementation of this method to request an api.

This method takes care of **_production_** and **_development_** environments.
This method takes care of auth token needed to access protected apis.

So, lets know how to use this method to request any of the apis.

```javascript
import apiRequest from "../src/logics/apiRequest";
import APIS from "../src/constants/Apis";

// apis name constants
const protectedApis = APIS.PROTECTED_APIS;
const unprotectedApis = APIS.UNPROTECTED_APIS;

// request data
const postRequestData = {
    // declare datas here
    displayName: name,
    updateAuth: false
};

//get api response
const apiRes = await apiRequest('post', protectedApis.ITEM_UPLOAD, postRequestData, 'json', true)
```  
## apiRequest
- ### **Prototype of function apiRequest is :**  
`
apiRequest(request_method, api_name, data_to_send_in_post_request, content_type, isAuth)
`

- ### **Arguments** :  
```
    request_method : request method to send api request;  
    api_name: name of api to be used (APIS constant json in project should be used as shown above.)
    data_to_send_in_post_request: json data to be sent in post request.
    content_type: content type.
    isAuth: true for protected apis and false for unprotected apis.
```

- ### **Promise Returned :**

`
the data sent by the api is return as promise.
`