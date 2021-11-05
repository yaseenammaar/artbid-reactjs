import React, {useEffect, useState} from "react"
import {
    useHistory,
    useLocation
} from "react-router-dom";
import getSearchResults from "../../api/getSearchResults";
import SearchResultItem from "../../components/pageComponents/searchResult/SearchResultItem";
import styles from "./searchResultPage.module.css";
import useSearchSuggestions from "../../hooks/useSearchSuggestions";
import SearchLoading from "../../components/molecules/search/MainSearchBar";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResultPage(props) {
    let history = useHistory()
    let query = useQuery()
    const gotSearchText = query.get("searchText")
    const method = query.get("method")
    console.log("method :", method.trim())

    useEffect(() => {
        (async () => {
            const resData = await getSearchResults(gotSearchText, method)
            if(!resData.isError) {
                setResults(resData.results)
            }
            else {
                console.log("error found in search results")
            }
        })()
    }, [gotSearchText])

    const [results, setResults] = useState([])
    const {searchText, setSearchText, search} = useSearchSuggestions();
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [visibleText, setVisibleText] = useState(gotSearchText)

    return (
        <div className={styles.root_container}>

            <div className={showSuggestions? styles.search_bar_container_with_bigger_size : styles.search_bar_container_with_smaller_size}>
                <SearchLoading
                    inputStyle={{backgroundColor: "#ffffff"}}
                    value={visibleText}
                    showSuggestions={showSuggestions}
                    searchButtonOnClick={() => {
                        setShowSuggestions(false)
                        history.push(`/search_result?searchText=${searchText}&method=search`)

                    }}

                    onClickSuggestion={(suggestion) => {
                        setShowSuggestions(false)
                        history.push(`/search_result?searchText=${suggestion}&method=suggestion`)
                    }}

                    onFocusSearch={() => {
                        search.result.length > 0?
                            setShowSuggestions(true)
                            :
                            setShowSuggestions(false)
                    }}

                    onBlurSearch={() => {
                        //setShowSuggestions(false)
                    }}

                    onChangeSearch={(e) => {
                        if(e.target.value !== gotSearchText) {
                            setSearchText(e.target.value)
                            setVisibleText(e.target.value)
                            setShowSuggestions(false)
                        }
                    }}

                    closeDropdown={() => (
                        setShowSuggestions(false)
                    )}

                    showDropdown={() => {
                        setShowSuggestions(true)
                    }}

                    loading={search.loading}
                    suggestions={search.result}
                    error={search.error}

                />
            </div>

            <div className={styles.results_section}>
                {
                    results.map((result, i) => (
                        <SearchResultItem
                            key={i}
                            imageUrl={result.featuredImage}
                            title={result.title}
                            description={result.description}
                            category={result.category}
                            onItemClicked={() => {
                                history.push({
                                    pathname: '/art',
                                    search: `?itemId=${result.itemId}`,
                                })
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SearchResultPage