import React, {useState} from "react";
import useSearchSuggestions from "../../../hooks/useSearchSuggestions";
import {useHistory} from "react-router-dom"
import MainSearchBar from "../../molecules/search/MainSearchBar";


function Hero() {
    let history = useHistory()
    const {searchText, setSearchText, search} = useSearchSuggestions();
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <>
            <section id="hero" className="container mt-5">
                <div className="overlay">
                </div>

                <div className="text-center content">
                    <h1> Welcome to ArtBid</h1>
                    <p>Online public auction platform</p>
                        <MainSearchBar
                            showSuggestions={showSuggestions}
                            searchButtonOnClick={() => {
                                history.push(`/search_result?searchText=${searchText}&method=search`)
                            }}

                            onClickSuggestion={(suggestion) => {
                                history.push(`/search_result?searchText=${suggestion}&method=suggestion`)
                            }}

                            onFocusSearch={() => {
                                search.result.length > 0? setShowSuggestions(true) : setShowSuggestions(false)
                            }}

                            onBlurSearch={() => {
                                //setShowSuggestions(false)
                            }}

                            onChangeSearch={(e) => {
                                setSearchText(e.target.value)
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
            </section>
        </>
    );
}


export default Hero