# <span style="color: orange">GET</span> `/search/suggestions/:searchWord`

This api should be used to get suggestions on the basis of a search word (search text).

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function getSearchSuggestions(searchText) {
  const apiUrl = `/search/suggestions/${searchText}`
  return await apiRequest("get", apiUrl)
}

const resBody = await getSearchSuggestions("ar")
if (resBody.isError) {
  // handle error or try again
  console.log("statusCode is:", resBody.statusCode)
  console.log("error is:", resBody.error)
} else {
  // success
  const suggestions = resBody.suggestions // array with strings as suggestions
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **GET**

-------------

### <span style="color: #00CED1">PARAMS:</span>
- #### searchWord:<br>
  search text with respect to which you want to show suggestions.

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
    suggestions: [ 
      /*... all suggestions as string */
      /* in case of error, it is null */
    ],
}
```