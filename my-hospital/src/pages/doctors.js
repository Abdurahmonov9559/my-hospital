import React from "react";
import Banner from "../components/banner/banner";
import Comment from "../components/comment/comment";
import DoctorsPage from "../components/doctor-page/doctors/doctors";
// import Doctor from "../components/doctor/doctor";
import HomeContact from "../components/header/home-contact/home-contact";
import HomeNews from "../components/header/home-news/homw-news";

const Doctors = () => {
    return (
        <>
            <Banner title="Our Doctors" page="Home / Doctors"/>
            <DoctorsPage />
            <Comment />
            <HomeNews />
            <HomeContact />
        </>
    )
}

export default Doctors