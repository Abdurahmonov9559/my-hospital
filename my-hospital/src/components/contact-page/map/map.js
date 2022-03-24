import React from "react";
import './map.scss';

const Map = () => {
    return (
        <div className="map">
            <div className="container">
                <img src={require('../../../public/img/map.png')}/>    
            </div>
        </div>
    )
}

export default Map