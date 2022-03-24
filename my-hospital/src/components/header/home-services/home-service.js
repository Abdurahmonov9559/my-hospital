import React from "react";
import './home-service.scss';

const HomeService = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="stitle">Care you can believe in</div>    
                <div className="btitle">
                    Our Services    
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="service__content--box">
                        <div className="services__box">
                            <img src={require('../../../public/img/service1.png')}/>
                            <span>Free Checkup</span>    
                        </div>    
                        <div className="services__box">
                            <img src={require('../../../public/img/service2.png')}/>
                            <span>Cardiogram</span>    
                        </div>    
                        <div className="services__box">
                            <img src={require('../../../public/img/service3.png')}/>
                            <span>Dna Testing</span>    
                        </div>    
                        <div className="services__box">
                            <img src={require('../../../public/img/service4.png')}/>
                            <span>Blood Bank</span>    
                        </div>    
                        <div className="services__view">
                            <a href="#">View All</a>   
                        </div>    
                        </div>    

                    </div>
                    <div className="col-6">
                        <div className="services__contetnt">
                            <div className="services__title">
                            A passion for putting patients first.    
                            </div>  
                            <ul>
                                <li>A Passion for Healing</li>    
                                <li>All our best</li>    
                                <li>A Legacy of Excellence</li>     
                                <li>5-Star Care</li>    
                                <li>Believe in Us</li>    
                                <li>Always Caring</li>    
                            </ul>  
                            <div className="services__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>

                            </div>
                        </div>    
                    </div>
                    <div className="col-4">
                        <div className="service__img">
                            <img src={require('../../../public/img/service5.png')}/>    
                            <img src={require('../../../public/img/service6.png')}/>    
                        </div>    
                    </div>    
                </div>
            </div>    
        </div>
    )
}

export default HomeService