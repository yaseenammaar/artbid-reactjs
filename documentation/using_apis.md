# How to use Apis...

**_NOTE:_** For APIs documentation and usage examples go to [API index](./apis/index.md).

To use apis don't use fetch or axios directly. An abstracted function [apiRequest](../src/logics/apiRequest.js) has been built in this project.

You may go to [../src/logics/apiRequest.js](../src/logics/apiRequest.js) file to see what are the urls for api and how this method is configured.  
However, you don't need to know the url or implementation of this method to request an api.

This method takes care of **_production_** and **_development_** environments.
This method takes care of auth token needed to access protected apis.

So, lets know how to use this method to request any of the apis.

```javascript
import apiRequest from "../src/logics/apiRequest";

// apis name constants
const protectedApis = APIS.PROTECTED_APIS;
const unprotectedApis = APIS.UNPROTECTED_APIS;

// request data
const postRequestData = {
    // declare request body here
};

//get api response
// apiRequest takes parameter apiRequest(request_method, relative_api_url, request_body_in_json, content_type)
// default content type is application/json and it is optional,
// request body is also optional and default is {}
const apiRes = await apiRequest('post', API_URL, postRequestData)
```  
## apiRequest
- ### **Prototype of function apiRequest is :**  
`
apiRequest(request_method, api_name, data_to_send_in_request_body, content_type)
`  
default content type is application/json and it is optional,  
request body is also optional and default is {}  


- ### **Arguments** :  
```
    request_method : request method to send api request;  REQUIRED.
    api_url: relative path of apis to be used.(excluding than base url) REQUIRED
    data_to_send_in_post_request: json data to be sent in post request. OPTIONAL. DEFAULT = {}
    content_type: content type. OPTIONAL. DEFAULT = application/json
```

- ### **Promise Returned :**

`
the resbonse body sent by the api is return as promise.
`
  
This response body will always contain (in any case; even if it is error not related to apis):
```javascript
const resBody = {
    error: string,
    isError: true | false,
    statusCode: number,
    
    //... other body parts 
}
```