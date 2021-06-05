# <span style="color: orange">GET</span> `/search/results/:keyword`

This api should be used to get results on the basis of any search text or keyword or suggestion.

------------------

### <span style="color: #00CED1">EXAMPLE USE:</span>

```javascript
// don't directly use fetch or axios... use this function for artbid api request.
import apiRequest from "./apiRequest"; 

async function getSearchResults(keyword, limit, method, lastResultId) {
    const query = `?limit=${limit}&method=${method}&lastResultId=${lastResultId}`
    const apiUrl = `/search/suggestions/${keyword}`
    return await apiRequest("get", apiUrl + query)
}

const limit = 10  // default is 10, OPTIONAL
const method = "suggestion"  // default is search; OPTIONAL
const lastResultId = LAST_RESULT_ID // default is null and give result from beginning if set null or not goven in query
const resBody = await getSearchResults("art", limit, method, lastResultId)
if (resBody.isError) {
    // handle error or try again
    console.log("statusCode is:", resBody.statusCode)
    console.log("error is:", resBody.error)
} else {
    // success
    
    // save the itemId of last result to fetch next set of results
    const results = resBody.results
    const allResultsFetched = resBody.allResultsFetched
}
```

-------------------

### <span style="color: #00CED1">METHOD:</span> **GET**

-------------

### <span style="color: #00CED1">PARAMS:</span>
- #### keyword:<br>
  search text with respect to which you want to show suggestions.

-----------------

### <span style="color: #00CED1">QUERIES AVAILABLE:</span>
- #### limit:<br>
  How many results to be fetched is controlled by this query.
    <br>
  OPTIONAL.
    <br>
  DEFAULT : 10

- #### method:<br>
  method can be search or suggestion.
  <br>
  OPTIONAL.
  <br>
  DEFAULT : "search"

- #### lastResultId:<br>
  result id of last fetched result (api will fetch after that result).
  <br>
  OPTIONAL.
  <br>
  DEFAULT : null

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
    results: [ 
      /*... all results as json objects */
      /* in case of error, it is null */
    ],
    allResultsFetched: false, // true in case of no item is left after last doc in this results list, otherwise false
}
```