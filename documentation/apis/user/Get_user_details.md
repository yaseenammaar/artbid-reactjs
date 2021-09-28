# <span style="color: orange">GET</span> `/user/:userId`

This api should be used to get details of current user or any other user.

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function getUserDetails(uid) {
    const apiUrl = `/user/${uid}`
    return await apiRequest("get", apiUrl)
}

const resBody = await getUserDetails("sdfdagdfgdfgdfhj")
if (resBody.isError) {
    // handle error or try again
    console.log("statusCode is:", resBody.statusCode)
    console.log("error is:", resBody.error)
} else {
    // success
    
    // save the itemId of last result to fetch next set of results
    const results = resBody.results
    const allResultsFetched = resBody.user
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **GET**

-------------

### <span style="color: #00CED1">PARAMS:</span>
- #### userId:<br>
  userId param takes the uid of the user of which details have to be fetched. It can take two values, either uid of the user or 'currentUser'. If you give uid of current User, there is no issue as api automatically recognises the uid.

-----------------

### <span style="color: #00CED1">QUERIES AVAILABLE:</span>
no queries available

---------------

### <span style="color: #00CED1">REQUEST BODY:</span>

No request body is needed.

----------------

### <span style="color: #00CED1">RESPONSE BODY:</span>

```json5
{
    statusCode: 200, //(200 in case or success) refer errors to know all error codes,
    error: null, // (null in case of success) otherwise a string message will be here in case of any error
    isError: false, // (false in case of success) otherwise true
    user: {
      //...
    }
}
```