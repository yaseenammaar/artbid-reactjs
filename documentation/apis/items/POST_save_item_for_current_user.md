# <span style="color: orange">POST</span> `/item/:itemId/save`

This api should be used when you want to save an item in current user saved items section.

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function saveItem(itemId) {
  const apiUrl = `/item/${itemId}/save`
  return await apiRequest("post", apiUrl)
}

const resBody = await saveItem("ksjdhafkjdjfkdhfkj")
if (resBody.isError) {
    // handle error or try again
    console.log("statusCode is:", resBody.statusCode)
    console.log("error is:", resBody.error)
} else {
    // success
    const itemSaveSuccess = resBody.itemSaveSuccess
    const itemSavedAlready = resBody.itemSavedAlready
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **POST**

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
    itemSaveSuccess: true, // true in case of successful save otherwise false
    itemSavedAlready: true, // true if item was saved before this call otherwise false
}
```