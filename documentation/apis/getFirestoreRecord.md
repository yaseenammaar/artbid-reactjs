# API - getFirestoreRecord
#### Api to get any firestore document in database.

------------------------

- ### Request Data Required :

  {  
  **_docPath_** :  path of document in string,  
  }

------------------

- ### Returns response :

  {  
  **_docRecord_** : firestore document,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const getFirestoreRecord = async (docPath) => {
    const requestData = {
        docPath
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.GET_FIRESTORE_RECORD, requestData, 'application/json', true);
    return response;
}
```