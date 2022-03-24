import React, {useState, useEffect} from "react";
import Doctor from "../../doctor/doctor";
import './doctors.scss'
import axios from "axios";

const DoctorsPage = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/doctors/all')
        .then(res => {
            setDoctors(res.data)
        })
    },[])

    return (
        <div className="doctors-page">
            <div className="container">
                <div className="row">
                {doctors.map(doctor => (
                    <div className="col-4 mt-20" key={doctor._id}>
                        <Doctor doctor={doctor}/>   
                    </div>   
                ))} 
                </div>    
            </div>
        </div>
    )
}

export default DoctorsPage