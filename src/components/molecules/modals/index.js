import ProfileInputs from "./modalComponents/ProfileInputs";
import WithModalWrapper from "./WithModalWrapper";
import Contact from "./modalComponents/Contact";
import PhoneAuth from "./modalComponents/PhoneAuth";
import AboutUs from "./modalComponents/AboutUs";
import More from "./modalComponents/More";

export default [
    {
        name: "login",
        component: (props) => (<WithModalWrapper {...props} ><PhoneAuth /></WithModalWrapper>)
    },
    {
        name: "complete_profile",
        component: (props) => (<WithModalWrapper {...props}><ProfileInputs /></WithModalWrapper>)
    },
    {
        name: "contact_us",
        component: (props) => (<WithModalWrapper {...props}><Contact /></WithModalWrapper>)
    },
    {
        name: "about_us",
        component: (props) => (<WithModalWrapper {...props}><AboutUs /></WithModalWrapper>)
    },
    {
        name: "more",
        component: (props) => (<WithModalWrapper {...props}><More /></WithModalWrapper>)
    }
]