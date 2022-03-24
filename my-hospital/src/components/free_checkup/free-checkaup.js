import React from "react";
import './free-checkup.scss';

const FreeCheckup = () => {
    return (
        <div className="col-4">
            <div className="checkup">
                <div className="checkup__img">
                    <div className="checkup__img--plast">
                        <img src={require('../../public/img/plast.png')}/>     
                    </div>   
                </div>
                <div className="checkup__title">
                    Free Checkup    
                </div>
                <div className="checkup__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.    
                </div>
                <button className="btn__arrow"><a href="/services/single">Learn More
                    <img src={require('../../public/img/arrow.png')}/></a>
                </button>
            </div>
        </div>
    )
}

export default FreeCheckup