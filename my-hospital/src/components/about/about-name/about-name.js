import React from "react";
import './about-name.scss';

const AboutName = () => {
    return (
        <div className="aboutName">
            <div className="container">
                <img src={require('../../../public/img/hospital-name.png')}/>
                <div className="aboutName--content">
                    <div className="stitle">Welcome to Hospital name</div>    
                    <div className="btitle">Best Care for Your Good Health</div>
                    <ul>
                        <li>A Passion for Healing</li>    
                        <li>All our best</li>    
                        <li>A Legacy of Excellence</li>     
                        <li>5-Star Care</li>    
                        <li>Believe in Us</li>    
                        <li>Always Caring</li>    
                    </ul>
                    <div className="aboutName--text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutName