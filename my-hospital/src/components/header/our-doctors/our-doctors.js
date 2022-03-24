import React from "react";
import Doctors from "../../doctors/doctors";
import './our-doctors.scss';

const OurDoctors = ({btitle,stitle}) => {
    return (
        <div className="home__doctors">
            <div className="container">
                <div className="stitle">{stitle}</div>    
                <div className="btitle">{btitle}</div>   
                <Doctors /> 
            </div>    
        </div>
    )
}

export default OurDoctors
