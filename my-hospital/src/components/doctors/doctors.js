import React, { useEffect, useState } from "react";
import Doctor from "../doctor/doctor";
import './doctors.scss';
import Carousel from 'react-elastic-carousel';
import axios from "axios";

const Doctors = () => {
           
    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/doctors/all')
        .then(res => {
            setDoctors(res.data)
        })
    },[])


    return (
        <div className="doctors">
            <div className="row">
                <Carousel itemsToShow={3} className="px-15">
                        {doctors.map(doctor => (
                            <div key={doctor._id}>
                                <Doctor doctor={doctor}/>   
                            </div> 
                        ))}   
                </Carousel>
            </div>
        </div>
    )
}

export default Doctors