# <span style="color: orange">POST</span> `/item/:itemId/:bidType(bid|message)`

This api should be used to post a bid or message to a specific item.
<br>
`NOTE: Url for message is /item/:itemId/message`
<br>
`NOTE: Url for bid is /item/:itemId/bid`

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function postBidOrMessage(itemId, bidType, requestData) {
  const apiUrl = `/item/${itemId}/${bidType}`
  return await apiRequest("post", apiUrl, requestData)
}
```
<br>
In case of message:

```javascript
const itemId = "sdgfsdkhfksdhfksj"
const bidType = "message"
const messageData = {
    message: "My message",
}
const resBody = await postBidOrMessage(itemId, bidType, messageData)
if (resBody.isError) {
  // handle error or try again
  console.log("statusCode is:", resBody.statusCode)
  console.log("error is:", resBody.error)
} else {
  // success
  const taskCompleted = resBody.taskCompleted // should be true in case of success.
}
```

<br>
In case of bid:

```javascript
const itemId = "sdgfsdkhfksdhfksj"
const bidType = "bid"
const bidData = {
    plusAmount: 45.5,
}
const resBody = await postBidOrMessage(itemId, bidType, bidData)
if (resBody.isError) {
  // handle error or try again
  console.log("statusCode is:", resBody.statusCode)
  console.log("error is:", resBody.error)
} else {
  // success
  const taskCompleted = resBody.taskCompleted // should be true in case of success.
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **POST**

-------------

### <span style="color: #00CED1">PARAMS:</span>
- #### itemId:<br>
  id of an item which you want to fetch.

- #### bidType:
  bidType params can be either message or bid. (nothing else will match this endpoint and give 404 Not Found error)
  <br><br>
    1) `message`
        <br>
       bidType should be **_message_** in case you want to post a message to a item.
       <br><br>
       
    2) `bid`
        <br>
       bidType should be **_bid_** in case you want to bid on an item

-----------------

### <span style="color: #00CED1">QUERIES AVAILABLE:</span>

No queries available for this api

---------------

### <span style="color: #00CED1">REQUEST BODY:</span>

- CASE 1. `bidType == message`
    <br>
    Request body should contain _**message**_ field -
    ```json5
    {
      message: "Any message you want to post"  
  }
    ```
  
<br>

- CASE 2. `bidType == bid`
  <br>
  Request body should contain _**plusAmount**_ field -
    ```json5
    {
      plusAmount: 45.5 // Any amount which should be added to current bidding amount 
  }
    ```

----------------

### <span style="color: #00CED1">RESPONSE BODY:</span>

```json5
{
    statusCode: 200, //(200 in case or success) refer errors to know all error codes,
    error: null, // (null in case of success) otherwise a string message will be here in case of any error
    isError: false, // (false in case of success) otherwise true
    taskCompleted:  true, // (true in case of success) otherwise false
}
```