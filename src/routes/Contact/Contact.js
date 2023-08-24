import { ContactPage_1, ContactPage_2, ContactPage_3 } from "./Pages/Pages";

const Contact = () => {
    const className = {
        container: "w-full text-white font-Roboto",
    }

    return(
        <div className={className.container}>
            <ContactPage_1 />
            <ContactPage_2 />
            <ContactPage_3 />
        </div>
    )
}

export default Contact;