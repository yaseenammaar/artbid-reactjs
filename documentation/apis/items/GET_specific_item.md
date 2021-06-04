# <span style="color: orange">GET</span> `/item/:itemId`

This api should be used when you want a specific item using its itemId.

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function getSpecificItem(itemId) {
  const apiUrl = `/item/${itemId}`
  return await apiRequest("get", apiUrl)
}

const resBody = await getSpecificItem("ksjdhafkjdjfkdhfkj")
if (resBody.isError) {
  // handle error or try again
  console.log("statusCode is:", resBody.statusCode)
  console.log("error is:", resBody.error)
} else {
  // success
  const item = resBody.item
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **GET**

-------------

### <span style="color: #00CED1">PARAMS:</span> 
- #### itemId:<br>
    id of an item which you want to fetch.

-----------------

### <span style="color: #00CED1">QUERIES AVAILABLE:</span>

No queries available for this api

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
    item: { 
      /*... all doc fields*/
      /* in case of error, it is null */
    },
}
```