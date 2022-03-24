import React from "react";
import Form from "../../form/form";
import Shedule from "../shedule/shedule";
import './book.scss';


const Book = () => {
    return (
        <div className="book">
            <div className="container">
                <div className="book__left">
                    <div className="btitle">
                        Book an Appointment    
                    </div>   
                    <div className="book__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.    
                    </div> 
                    <Form />
                </div>
                <div className="book__right"><Shedule /></div>
            </div>    
        </div>
    )
}

export default Book