import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__top">
                    <Link to="/"><img src={require('../../public/img/logo.png')}/></Link>
                    <div className="header__top--contact ml">
                        <img src={require('../../public/img/phone.png')}/>
                        <div className="header__content">
                            Emergency
                            <span>(237) 681-812-255</span>
                        </div>
                    </div>
                    <div className="header__top--contact">
                        <img src={require('../../public/img/clock.png')}/>
                        <div className="header__content">
                            Work Hour
                            <span>09:00 - 20:00 Everyday</span>
                        </div>
                    </div>
                    <div className="header__top--contact">
                        <img src={require('../../public/img/location.png')}/>
                        <div className="header__content">
                            Location
                            <span>0123 Some Place</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <ul className="header__bottom--menu">
                        <li><NavLink activeclassname='active' to="/">Home</NavLink></li>
                        <li><NavLink activeclassname='active' to="/about">About us</NavLink></li>
                        <li><NavLink activeclassname='active' to="/services">Services</NavLink></li>
                        <li><NavLink activeclassname='active' to="/doctors">Doctors</NavLink></li>
                        <li><NavLink activeclassname='active' to="/news">News</NavLink></li>
                        <li><NavLink activeclassname='active' to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="header__form">
                        <a to="#"><img src={require('../../public/img/search.png')}/></a>
                        <button className="btn"><a href="/appointment">Appointment</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header