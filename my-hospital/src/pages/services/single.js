import React from "react";
import Banner from "../../components/banner/banner";
import ContactBox from "../../components/contact-box/contact-box";
import HomeContact from "../../components/header/home-contact/home-contact";
import OurDoctors from "../../components/header/our-doctors/our-doctors";
import SingleCheckup from "../../components/single-checkup/single-checkup";


const ServicesSingle = () => {
    return (
        <>
            <Banner title="Free Checkup" page="Home / Services"/>
            <SingleCheckup />
            <OurDoctors btitle="Team Members" stitle="Meet The"/>
            <HomeContact />
        </>
    )
}

export default ServicesSingle