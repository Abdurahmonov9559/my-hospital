import React from "react";
import Banner from "../components/banner/banner";
import FreeCheckup from "../components/free_checkup/free-checkaup";
import HomeContact from "../components/header/home-contact/home-contact";


const Services = () => {
    return (
        <>
            <Banner title="Our Services" page="Home / Services"/>
            <div className="container">
                <div className="row">
                    <FreeCheckup />    
                    <FreeCheckup />    
                    <FreeCheckup />    
                    <FreeCheckup />    
                    <FreeCheckup />    
                    <FreeCheckup />    
                </div>    
            </div>
            <HomeContact />
        </>
    )
}

export default Services