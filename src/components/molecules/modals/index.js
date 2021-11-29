import ProfileInputs from "./modalComponents/ProfileInputs";
import WithModalWrapper from "./WithModalWrapper";
import Contact from "./modalComponents/Contact";
import PhoneAuth from "./modalComponents/PhoneAuth";
import AboutUs from "./modalComponents/AboutUs";
import More from "./modalComponents/More";
import Notifications from "./modalComponents/Notifications";
import Messages from "./modalComponents/messages/Messages";

export default [
    {
        name: "login",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props} ><PhoneAuth /></WithModalWrapper>)
    },
    {
        name: "complete_profile",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props}><ProfileInputs /></WithModalWrapper>)
    },
    {
        name: "contact_us",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props}><Contact /></WithModalWrapper>)
    },
    {
        name: "about_us",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props}><AboutUs /></WithModalWrapper>)
    },
    {
        name: "more",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props}><More /></WithModalWrapper>)
    },
    {
        name: "messages",
        component: (props) => (<WithModalWrapper {...props}><Messages /></WithModalWrapper>)
    },
    {
        name: "notifications",
        component: (props) => (<WithModalWrapper height={"500px"} width={"500px"} {...props}><Notifications /></WithModalWrapper>)
    }
]