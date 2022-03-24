import React from "react";
import './col-contact.scss';


const ColContact = ({contact,col}) => {

    return (
        <div className="row">
            {contact.map((con,index) => (
                <div className={col ? 'col-3' : 'col-6'} key={index}>
                    <div className="contactBox">
                        
                        <img src={con.img}/>
                        <div className="Box--title">{con.title}</div>    
                        <div className="Box--text">
                            <span>{con.text1}</span>    
                            <span>{con.text2}</span>    
                        </div>
                    </div>    
                </div>
            ))}
        </div>
    )
}

export default ColContact
