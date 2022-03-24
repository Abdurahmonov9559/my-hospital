import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import HeaderBg from "../components/header/header-bg/header-bg";
import HeaderRow from "../components/header/header-row/header-row";
import HeaderWelcome from "../components/header/header-welcome/header-welcome";
import HomeBook from "../components/header/home-book/home-book";
import HomeContact from "../components/header/home-contact/home-contact";
import HomeNews from "../components/header/home-news/homw-news";
import HomeOur from "../components/header/home-our/home-our";
import HomeService from "../components/header/home-services/home-service";
import OurDoctors from "../components/header/our-doctors/our-doctors";
import './style.scss'

const Home = () => {
    return (
        <div className="home">
            <HeaderBg />
            <HeaderRow />
            <HeaderWelcome />
            <HomeService />
            <HomeOur />
            <HomeBook />
            <OurDoctors btitle="Our Doctors" stitle="Trusted Care"/>
            <HomeNews />
            <HomeContact />
        </div>
    )
}


export default Home