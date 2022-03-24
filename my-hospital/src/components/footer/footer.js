import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer--top">
                    <div className="row">
                        <div className="col-3">
                            <div className="footer__box">
                                <img src={require('../../public/img/footer-logo.png')}/>  
                                <div className="footer__text">
                                Leading the Way in Medical Execellence, Trusted Care.
                                </div>
                            </div>   
                        </div>    
                        <div className="col-3">
                            <div className="footer__box">
                                <div className="footer__title">
                                    Important Links    
                                </div>
                                <ul>
                                    <li><a href="#">Appointment</a></li>
                                    <li><a href="#">Doctors</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </div>   
                        </div>    
                        <div className="col-3">
                            <div className="footer__box">
                                <div className="footer__title">
                                    Contact Us    
                                </div>
                                <ul>
                                    <li><a href="#">Call: (237) 681-812-255</a></li>
                                    <li><a href="#">Email: fildineesoe@gmail.com</a></li>
                                    <li><a href="#">Address: 0123 Some place</a></li>
                                    <li><a href="#">Some country</a></li>
                                </ul>
                            </div>   
                        </div>    
                        <div className="col-3">
                            <div className="footer__box">
                                <div className="footer__title">
                                    Newsletter    
                                </div>
                                <div className="form">
                                    <input type='email' placeholder="Enter your email address"/>
                                    <button><img src={require('../../public/img/send.png')}/></button>
                                </div>
                            </div>   
                        </div>    
                    </div>    
                </div>
                <div className="footer--bottom">
                    <div className="footer--bottom__content">
                        © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD    
                    </div> 
                    <div className="footer__icon">
                        <a href="#"><img src={require('../../public/img/footer-in.png')}/></a>    
                        <a href="#"><img src={require('../../public/img/footer-fb.png')}/></a>    
                        <a href="#"><img src={require('../../public/img/footer-ig.png')}/> </a>   
                    </div>   
                </div>
            </div>
        </footer>
    )
}

export default Footer