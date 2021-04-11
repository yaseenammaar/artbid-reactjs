# API - updateUserData
#### Api to update user data.

------------------------

- ### Request Data Required :

  {
  **_ph_no_** :  default is 'All',
  **_photo_url_** : price,
  **_email_** : user id ,
  **_name_** : caption string,
  **_uid_** : category string,
  }

------------------

- ### Returns response :

  {
  **_isUpdated_** : true | false,
  **_writeTime_** : firestore write time,
  **_userRecord_** : current User Record,
  **_isError_** : true | false,
  **_error_** : string | null,
  **_statusCode_** : number (200 | 400)
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const updateUserData = async (ph_no, photo_url, email, name, uid) => {
    const requestData = {
        ph_no,
        photo_url,
        email,
        name,
        uid
    };

    const response = await apiRequest('post', APIS.PROTECTED_APIS.UPDATE_USER_DATA, requestData, 'application/json', true);
    return response;
}
```