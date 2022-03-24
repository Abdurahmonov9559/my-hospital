import React from "react";
import NewsBox from "../news-box/news-box";
import './home-news.scss';

const HomeNews = () => {
    return (
        <div className="homeNews">
            <div className="container">
                <div className="stitle">Better information, Better health</div>   
                <div className="btitle">News</div> 
                <NewsBox />
            </div>
        </div>
    )
}

export default HomeNews
