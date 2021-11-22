import React from "react";
import ModalWrapper from "../../atoms/ModalWrapper";
import PhoneAuth from "./modalComponents/PhoneAuth";

function WithModalWrapper(props) {
    return(
        <ModalWrapper {...props}>
            {props.children}
        </ModalWrapper>
    )
}

export default WithModalWrapper