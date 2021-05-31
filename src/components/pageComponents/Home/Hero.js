import React, {useState} from "react";
import { Div } from "react-atomize";
import useSearchSuggestions from "../../../hooks/useSearchSuggestions";
import {useHistory} from "react-router-dom"
import SearchLoading from "../../molecules/search/SearchLoading";


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

                    {/*<div className="search">
                        <input placeholder="Search your interests"/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>*/}
                    <Div
                        m={{t: "2.0rem", x: "auto"}}
                        d={"flex"}
                        justify={"center"}
                        w={"500px"}
                        // className="search"
                    >

                        <SearchLoading
                            showSuggestions={showSuggestions}
                            searchButtonOnClick={() => {
                                history.push(`/search_result?searchText=${searchText}&method=search`)
                            }}

                            onClickSuggestion={(suggestion) => {
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

                    </Div>
                </div>
            </section>
        </>
    );
}


export default Hero