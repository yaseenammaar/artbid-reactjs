# API - toggleFollowUnfollow
#### Api to toggle the follow or unfollow status.

------------------------

- ### Request Data Required :

  {  
  **_other_user_id_** :  user id of which toggle has to be done,  
  }

------------------

- ### Returns response :

  {  
  **_writeRes_** : firestore write response,  
  **_toggleAction_** : "followed" | "unfollowed" | null,  
  **_isError_** : true | false,  
  **_error_** : string | null,  
  **_statusCode_** : number (200 | 400)  
  }

----------------------

- ### Example Usage :

```javascript
import apiRequest from "./apiRequest";
import APIS from "./Apis";

const toggleFollowUnfollow = async (other_user_id) => {
    const requestData = {
        other_user_id
    };
    
    const response = await apiRequest('post', APIS.PROTECTED_APIS.TOGGLE_FOLLOW_UNFOLLOW, requestData, 'application/json', true);
    return response;
}
```