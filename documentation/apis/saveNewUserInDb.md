# API - saveNewUserInDb
#### Api to save new users in firestore.

------------------------

- ### Request Data Required :
    
  {  
    **_bio_** :  String,  
    **_creation_date_** : datetime,  
    **_email_** : String,  
    **_last_signin_** : datetime,  
    **_phone_no_** : String,  
    **_profile_pic_** : url string,  
    **_username_** : String  
  }
  
------------------
  
- ### Returns response : 

    {  
        **_writeTime_** : timestamp | null,  
        **_isError_** : true | false,  
        **_error_** : string | null,  
        **_statusCode_** : number (200 | 400)  
    }
  
----------------------
  
- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const saveNewUserInFirestore = async (bio, firebaseUser) => {
    const requestData = {
        bio,
        username: firebaseUser.displayName,
        email: firebaseUser.email,
        phone_no: firebaseUser.phoneNumber,
        profile_pic: firebaseUser.photoURL,
        creation_date: firebaseUser.metadata.creationTime,
        last_signin: firebaseUser.metadata.lastSignInTime,
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.SAVE_NEW_USER_IN_DB, requestData, 'json', true);
    return response;
}
```