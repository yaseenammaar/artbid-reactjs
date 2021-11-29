import React from "react";
import {Modal} from "react-atomize";
import {useHistory} from "react-router-dom";

function ModalWrapper(props) {
    const {parentUrl} = props
    const history = useHistory()

    const {height = "90vh", width = "90vw"} = props

    return (
        <Modal
            h={height}
            w={width}
            maxW={width}
            isOpen={true}
            onClose={() => {
                history.push(`${parentUrl}`)
            }}
            align="center"
            rounded="md"
            shadow="1"
        >

            {props.children}
        </Modal>
    )
}

export default ModalWrapper