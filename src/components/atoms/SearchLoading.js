import { Input, Button, Icon } from "react-atomize";
import styles from '../styles/searchBarStyles.module.css'
import React, {useState} from "react";

function SearchLoading(props){

    const [isLoading, setIsLoading] = useState(false)

    const {
        showSuggestions = true,
        searchButtonOnClick,
        DropdownComponent = () => {
            return (
                <div style={{margin: 10}}>
                    No suggestions
                </div>
            )
        },
    } = props

    return (
        <div className={styles.search_container}>
            <Input
                placeholder="Search"
                className={showSuggestions? styles.search_bar_invisible_bottom_radius + " " + styles.search_bar : styles.search_bar_visible_bottom_radius + " " + styles.search_bar}
                w={"500px"}
                onFocus={props?.onFocusSearch}
                onBlur={props?.onBlurSearch}
                suffix={
                    <Button
                        pos="absolute"
                        onClick={() => {
                            setIsLoading(!isLoading)
                            searchButtonOnClick()
                        }}
                        bg="transparent"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{ r: "md" }}
                    >
                        <Icon
                            name={isLoading ? "Loading" : "Search"}
                            color={isLoading ? "gray900" : "black"}
                            size="16px"
                        />
                    </Button>
                }
            />
            <div className={showSuggestions? styles.dropdown_content + " " + styles.dropdown_visible : styles.dropdown_content + " " + styles.dropdown_invisible}>
                <DropdownComponent />
            </div>
        </div>
    );

}

export default SearchLoading