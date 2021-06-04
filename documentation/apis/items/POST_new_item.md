# <span style="color: orange">POST</span> `/item`

This api should be used to add new item in Firestore.

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest";

async function uploadNewItem(itemData) {
    const apiUrl = `/item`
    return await apiRequest("get", apiUrl, itemData)
}

const resBody = await uploadNewItem({
    newDocId,  // id of item to be made
    basePrice,  // base price in number
    description,  // description of item in string
    category,  // category of item in string
    closingTimestamp, // date object or stringified date object
    title,  // title of item
    featuredImage, // should be string url
    supportingImages, // should be array of url in string
})
if(resBody.isError) {
    // handle error or try again
    console.log("statusCode is:", resBody.statusCode)
    console.log("error is:", resBody.error)
}
else {
    // upload complete
    const addResult = resBody.addResult
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **POST**

-------------

### <span style="color: #00CED1">PARAMS:</span>
No params required.

-----------------

### <span style="color: #00CED1">QUERIES AVAILABLE:</span>

No queries available for this api

---------------

### <span style="color: #00CED1">REQUEST BODY:</span>

```json5
{
  newDocId:  NEW_DOC_ID,  // id of item to be made
  basePrice:  BASE_PRICE,  // base price in number
  description:  DESCRIPTION,  // description of item in string
  category:  CATEGORY,  // category of item in string
  closingTimestamp:  CLOSING_DATE, // date object or stringified date object
  title:  ITEM_TITLE,  // title of item
  featuredImage:  FEATURED_IMAGE_URL, // should be string url
  supportingImages:  SUPPORTING_IMAGES_URL_ARRAY, // should be array of url in string
}
```

----------------

### <span style="color: #00CED1">RESPONSE BODY:</span>

```json5
{
    statusCode: 200, //(200 in case or success) refer errors to know all error codes,
    error: null, // (null in case of success) otherwise a string message will be here in case of any error
    isError: false, // (false in case of success) otherwise true
    addResult: [
      /*... all batch commit results here*/
      /* in case of error, it is null */
    ],
}
```