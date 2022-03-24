import React from "react";
import Book from "../components/appointment/book/book";
import Banner from "../components/banner/banner";
import Map from "../components/contact-page/map/map";
import HomeContact from "../components/header/home-contact/home-contact";

const Appointment = () => {
    return (
        <>
            <Banner title="Book an Appointment" page="Home / Appointment" />
            <Book />
            <Map />
            <HomeContact />
        </>
    )
}

export default Appointment