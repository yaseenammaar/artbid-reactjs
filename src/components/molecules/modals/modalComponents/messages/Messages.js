import React from "react";
import {Div, Icon, Text} from "react-atomize";
import PersonSnippet from "../../../person/PersonSnippet"
import styles from "./messages_style.module.scss"

function Messages(props) {
    return(
        <div className={styles.message_container}>
            <div className={styles.left_pane}>
                <Text>Chat rooms</Text>
            </div>
            <div className={styles.right_pane}>
                <Text>Messages</Text>
                <div className={styles.messages}>
                    {
                        Array(15).fill(1).map((el, i) =>
                            <PersonSnippet key={i} className={styles.message_leaf}/>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Messages