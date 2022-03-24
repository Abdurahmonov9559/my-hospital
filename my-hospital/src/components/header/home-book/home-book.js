import React from "react";
import Form from "../../form/form";
import './home-book.scss';

const HomeBook = () => {
    return (
        <div className="home__book">
            <div className="container">
                <div className="book__left">
                    <div className="book--title">Book an Appointment</div>    
                    <div className="book--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</div>
                </div>    
                <Form />    
            </div>
        </div>
    )
}

export default HomeBook
