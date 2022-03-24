import axios from "axios";
import React, { useEffect, useState } from "react";
import './home-our.scss';

const HomeOur = () => {

    const [category, setCategory] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/category/all')
        .then(res => {
            setCategory(res.data)
        })
    },[])



    return (
        <div className="home__our">
            <div className="container">
                <div className="stitle">Always Caring</div>  
                <div className="btitle">Our Specialties</div> 
                <div className="row">
                    {category.map(cate => (
                        <div className="col-3" key={cate._id}>
                            <div className="our__box">
                                <img src={require('../../../public/img/life.png')} />  
                                {cate.bolim} 
                            </div>    
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default HomeOur