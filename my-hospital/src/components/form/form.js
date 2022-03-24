import React, {useEffect, useState} from "react";
import './form.scss';
import axios from "axios";

const Form = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/doctors/all')
        .then(res => {
            setDoctors(res.data)
        })
    },[])

    return (
        <form>
            <input type='text' placeholder="Name"/>
            <select>
                <option value=''>Gender</option>
                <option value='Male'>Male</option>
                <option value='Famale'>Famale</option>
            </select>
            <input type='email' placeholder="Email"/>
            <input type='text' placeholder="Phone"/>
            <input type='date' placeholder="Date"/>
            <input type='date' placeholder="Time"/>
            <select>
                <option value=''>Doctor</option>
                {doctors.map(doctor => (
                    <option value={doctor._id}>{doctor.ism}</option>
                ))}
            </select>
            <select>
                <option value=''>Department</option>
            </select>
            <textarea placeholder="Message" rows='10'></textarea>
            <button>Submit</button>
        </form>
    )
}

export default Form
