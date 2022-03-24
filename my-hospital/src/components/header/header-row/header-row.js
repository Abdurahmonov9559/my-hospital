import React from "react";
import './header-row.scss';

const HeaderRow = () => {
    return (
        <div className="header__row">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="header__row--box dark-blue">
                            Book an Appointment
                            <img src={require('../../../public/img/calendar.png')}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header__row--box light">
                            Book an Appointment
                            <img src={require('../../../public/img/team.png')}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header__row--box light-blue">
                            Book an Appointment
                            <img src={require('../../../public/img/money.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderRow