import React from "react"
import {
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResultPage(props) {

    let query = useQuery()
    const searchText = query.get("searchText")
    const method = query.get("method")

    return (
        <div>
            Search Results for {searchText}
        </div>
    );
}

export default SearchResultPage