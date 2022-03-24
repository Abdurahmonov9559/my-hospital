import React from "react";
import './banner.scss';

const Banner = ({title,page}) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="pages">{page}</div>  
                <div className="btitle">{title}</div>  
            </div>
        </div>
    )
}

export default Banner