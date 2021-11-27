import React from 'react';
import './Menubar.css';
import logo from '../../images/logo1.PNG';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        // menu area start
        <div>
            <div className="MenuBar-container">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                        <div className="logo-img">
                            <a href=""><img className="logo-area" src={logo} alt="" /></a>
                            <a href=""><h4>LiFE-CARE LIMITED</h4></a>
                        </div>
                    </div>
                    {/* set all the menu */}
                    <div className="col-md-9">
                        <div className="menu-container ">
                        <ul className="d-flex align-items-end justify-content-end">
                            <Link to="/home"  className="items">
                            <li>Home</li>
                            </Link>
                            <Link to="/doctors" className="items">
                            <li>Doctors</li>
                            </Link>
                            <Link to="/about" className="items">
                            <li>About Us</li>
                            </Link>
                            <Link to="contact" className="items">
                            <li>Contact Us</li>
                            </Link>
                            <Link to="contact" className="items">
                            <li>Login</li>
                            </Link>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;