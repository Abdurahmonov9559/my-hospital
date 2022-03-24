import React from "react";
import './single-checkup.scss';

const SingleCheckup = () => {
    return (
        <div className="singleCheckup">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="checkup__box">
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check1.png')}/>
                                Free Checkup    
                            </div>  
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check2.png')}/>
                                Cardiogram    
                            </div>  
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check3.png')}/>
                                Dna Testing    
                            </div>  
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check4.png')}/>
                                Blood Bank    
                            </div>  
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check5.png')}/>
                                Dermalogy    
                            </div>  
                            <div className="checkup__box--content">
                                <img src={require('../../public/img/check5.png')}/>
                                Orthopedic   
                            </div>  
                        </div>    
                    </div>
                    <div className="checkup__content">
                        <img src={require('../../public/img/check-img.png')}/>
                        <div className="checkup__content--title">
                            A passion for putting patients first    
                        </div>
                        <ul>
                            <li>A Passion for Healing</li>    
                            <li>All our best</li>    
                            <li>A Legacy of Excellence</li>     
                            <li>5-Star Care</li>    
                            <li>Believe in Us</li>    
                            <li>Always Caring</li>    
                        </ul>
                        <div className="checkup__content--text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                    </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default SingleCheckup