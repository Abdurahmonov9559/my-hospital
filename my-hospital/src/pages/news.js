import React from "react";
import Banner from "../components/banner/banner";
import HomeContact from "../components/header/home-contact/home-contact";
import NewsBox from "../components/news/news-box";


const News = () => {
    return (
        <>
            <Banner title="Blog Posts" page="Home / News" />
            <NewsBox />
            <HomeContact />
        </>
    )
}

export default News