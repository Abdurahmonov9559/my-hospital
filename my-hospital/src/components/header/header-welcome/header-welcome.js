import React from "react";
import './header-welcome.scss'

const HeaderWelcome = () => {
    return (
        <>
            <div className="header__welcome">
            <div className="stitle">Welcome to Meddical</div>
            <div className="btitle">A Great Place to Receive Care</div>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</div>
            <button className="btn__arrow">
                <a href="#">Learn More</a>
                <img src={require('../../../public/img/arrow.png')}/> 
            </button>
        </div>
            <div className="container">
            <div className="welcome-bg"></div>
        </div>
        </>
    )
}

export default HeaderWelcome