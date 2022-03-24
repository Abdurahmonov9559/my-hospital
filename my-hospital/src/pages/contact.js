import React from "react";
import Banner from "../components/banner/banner";
import GetContact from "../components/contact-page/get-contact/get-contact";
import Map from "../components/contact-page/map/map";
import HomeNews from "../components/header/home-news/homw-news";



const Contact = () => {
    return (
        <>
            <Banner title="Our Contacts" page="Home / Contact" />
            <Map />
            <GetContact />
            <HomeNews /> 
        </>
    )
}

export default Contact