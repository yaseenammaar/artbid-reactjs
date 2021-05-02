import { Input, Button, Icon, Div } from "react-atomize";
import styles from './searchBarStyles.module.css'
import React, {useEffect, useState} from "react";
import onClickOutside from "react-onclickoutside";
import BarLoader from "react-spinners/BarLoader"
import { css } from "@emotion/core";

function SearchLoading(props){

    const [isLoading, setIsLoading] = useState(false)

    const {
        showSuggestions = true,
        searchButtonOnClick,
        onClickSuggestion,
        showDropdown,
        closeDropdown,
        DropdownComponent = () => {
            return (
                <div>
                    {error && <div>Error: {error.message}</div>}
                    {suggestions && (
                        <React.Fragment>
                            {suggestions.map((suggestion, i) => (
                                <Div
                                    className={suggestions.length - 1 === i ? styles.suggestion + " " + styles.suggestion_with_bottom_radius : styles.suggestion}
                                    onClick={() => {
                                        onClickSuggestion(suggestion)
                                    }}
                                >{suggestion}</Div>

                            ))}
                        </React.Fragment>

                    )}
                </div>
            )
        },
        loading = false,
        suggestions = [],
        error = null
    } = props

    useEffect(() => {
        if(suggestions.length > 0) {
            showDropdown()
        }
        else {
            closeDropdown()
        }

    }, [suggestions])

    SearchLoading.handleClickOutside = () => props?.closeDropdown();

    const overrideLoaderCss = css`
      display: block;
      margin: 0;
      width: 100%;
    `;


    return (
        <div className={styles.search_container}>
            <Input
                placeholder="Search"
                style={props.inputStyle}
                className={showSuggestions? styles.search_bar_invisible_bottom_radius + " " + styles.search_bar : styles.search_bar_visible_bottom_radius + " " + styles.search_bar}
                value={props?.value}
                onFocus={props?.onFocusSearch}
                onBlur={props?.onBlurSearch}
                onChange={props?.onChangeSearch}
                suffix={
                    <Button
                        pos="absolute"
                        onClick={() => {
                            searchButtonOnClick()
                        }}
                        bg="info700"
                        hoverBg="info800"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{l: "0"}}
                        style={{borderBottomRightRadius: showSuggestions? 0 : 5, borderTopRightRadius: 5}}
                    >
                        <Icon
                            name={"Search"}
                            color={"white"}
                            size="16px"
                        />
                    </Button>
                }
            />
            <div className={showSuggestions? styles.dropdown_content + " " + styles.dropdown_visible : styles.dropdown_content + " " + styles.dropdown_invisible}>
                <BarLoader loading={loading} color={"#0080ff"} css={overrideLoaderCss} height={2}/>
                <DropdownComponent />
            </div>
        </div>
    );

}

const clickOutsideConfig = {
    handleClickOutside: () => SearchLoading.handleClickOutside
};

export default onClickOutside(SearchLoading, clickOutsideConfig);