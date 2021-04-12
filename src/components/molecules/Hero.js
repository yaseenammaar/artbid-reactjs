import React, {useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Anchor,
    DefaultTheme,
    Text
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import styles from "../styles/style";
import PersonCardWithImage from './PersonCardWithImage'
import heroImage from '../../assets/images/hero.webp';
import useSearchSuggestions from "../../hooks/useSearchSuggestions";
import { useHistory } from "react-router-dom"

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 2
    }

};

function Hero() {
    let history = useHistory()
    const {searchText, setSearchText, search} = useSearchSuggestions();
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <ThemeProvider theme={theme}>
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
                            m={{t: "2.0rem"}}
                            d={"flex"}
                            justify={"center"}
                        >

                            <SearchLoading
                                showSuggestions={showSuggestions}
                                searchButtonOnClick={() => {
                                    history.push(`/search_result?searchText=${searchText}&method=${2}`)
                                }}

                                onClickSuggestion={(suggestion) => {
                                    history.push(`/search_result?searchText=${suggestion}&method=${1}`)
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


        </ThemeProvider>
    );
}

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