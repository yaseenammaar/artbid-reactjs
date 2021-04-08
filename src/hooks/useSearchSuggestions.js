import {useState} from "react";
import {useAsync} from "react-async-hook";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import getSuggestions from "../logics/getSuggestions";

const searchSuggestions = async (text: string) => {
    const result = await getSuggestions(text)
    /*if (result.status !== 200) {
        throw new Error('bad status = ' + result.status);
    }*/
    //const json = await result.json();
    return result;
};

const useSearchSuggestions = () => {
    // Handle the input text state
    const [searchText, setSearchText] = useState('');

    // Debounce the original search async function
    const debouncedSearchSuggestions = useConstant(() =>
        AwesomeDebouncePromise(searchSuggestions, 300)
    );

    const search = useAsync(
        async (text) => {
            // If the input is empty, return nothing immediately (without the debouncing delay!)
            if (text.length === 0) {
                return [];
            }
            // Else we use the debounced api
            else {
                return debouncedSearchSuggestions(text);
            }
        },
        // Ensure a new request is made everytime the text changes (even if it's debounced)
        [searchText]
    );

    // Return everything needed for the hook consumer
    return {
        searchText,
        setSearchText,
        search,
    };
};

export default useSearchSuggestions