import React from "react";
import AboutName from "../components/about/about-name/about-name";
import Banner from "../components/banner/banner";
import Comment from "../components/comment/comment";
import HomeContact from "../components/header/home-contact/home-contact";
import HomeNews from "../components/header/home-news/homw-news";
import OurDoctors from "../components/header/our-doctors/our-doctors";

const About = () => {
    return (
        <>
            <Banner title="About us" page="Home / About"/>
            <AboutName />
            <Comment />
            <OurDoctors btitle="Our Doctors" stitle="Trusted Care"/>
            <HomeNews />
            <HomeContact />
        </>
    )
}


export default About