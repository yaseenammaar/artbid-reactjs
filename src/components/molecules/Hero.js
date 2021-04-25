import React, {useState} from "react";
import {DefaultTheme, ThemeProvider, Div} from "react-atomize";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import useSearchSuggestions from "../../hooks/useSearchSuggestions";
import {useHistory} from "react-router-dom"


import OneCard from './one-card';
import OneArtist from './one-artist';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';
import SearchLoading from "../atoms/SearchLoading";


function Hero() {
    let history = useHistory()
    const {searchText, setSearchText, search} = useSearchSuggestions();
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            {/*<<<<<<< HEAD
            <Row>
                <Col size={1}/>
                <Col size={10}>
                    <Div
                        h="30rem"
                        align="center"
                        justify="center"
                        shadow="1"
                        rounded="lg"
                        bg="warning400"
                        bgImg={heroImage}
                        bgSize="cover"
                        bgPos="center"
                        hoverShadow="5"
                        m={{t: "2rem"}}
                        p={{t: "8rem"}}
                        transition
                    >
                        <Text fontFamily="primary" textColor="white" textSize="display1" textAlign="center">
                            Welcome to ArtBid
                        </Text>
                        <Text fontFamily="primary" textColor="white" textSize="display4" textAlign="center">
                            Online Public Auction Platform
                        </Text>
                        
                        <Div
                            m={{t: "2.0rem", x: "auto"}}
                            d={"flex"}
                            justify={"center"}
                            w={"500px"}

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
                    </Div>

                    <Div d="flex" style={styles.products__container}>

                        <PersonCardWithImage/>
                        <PersonCardWithImage/>
                        <PersonCardWithImage/>
                    </Div>


                </Col>
                <Col size={1}/>
            </Row>
=======*/}

            {/* ############################# Hero Section ################################# */}
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
            {/* ############################# Hero Section End ################################# */}

            {/* ############################# Trending ######################################### */}

            <section id="trending" className="card-collection">
                <div className="container">


                    <div className="d-flex justify-content-between align-items-center collection-title">
                        <h2 className="m-0"> TRENDING </h2>
                        <a className="m-0" href="#">See All</a>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                    </div>

                </div>
            </section>

            {/* ####################################### Trending Section End ############################ */}


            {/* ####################################### Top Artists Section ############################ */}


            <section id="top-artist" className="card-collection">

                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> TOP ARTISTS </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="top-artist container mt-4">

                    <div className="row">

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist/>
                        </div>

                    </div>

                </div>
            </section>

            {/* ####################################### Top Artists Section End ############################ */}


            {/* ###################################### Sketches ###########################*/}

            <section className="card-collection">
                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> SKETCHES </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                    </div>
                </div>

            </section>

            {/* ###################################### Sketches End###########################*/}


            {/* ###################################### Sketches ###########################*/}

            <section className="card-collection">
                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> PAINTINGS </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                    </div>
                </div>

            </section>

            {/* ###################################### Sketches End###########################*/}


        </ThemeProvider>
    );
}


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 2
    }

};

const mapStateToProps = (state) => {
    const {auth} = state

    /**
     * Use it as:
     * const user = props.auth.user
     * const error = props.auth.error
     */

    return {auth}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        //all actions come here
        /**
         * props.setUser()
         * */
        setUser,
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Hero)