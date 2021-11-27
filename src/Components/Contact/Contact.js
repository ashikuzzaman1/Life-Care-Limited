import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-area">
            {/* contact menu area import */}
            <Menubar/>
            {/* contact area start */}
            <div className="container contact-container">
                <div className="row">
                    <div className="col-md-4">
                        <h2><i class="fas fa-laptop-house"></i> Head Office:</h2>
                        <p>LiFE Care Limited <br /> Momtaz Plaza (4th Floor) House#7,<br /> Road#4, Dhanmondi, Dhaka-1205</p>
                    </div>
                    <div className="col-md-4">
                        <h2><i class="fas fa-phone-square"></i> Phone:</h2>
                        <p>+88014785236</p><br />
                        <p>+88097546121</p><br />
                        <p>+88085424248</p>
                    </div>
                    <div className="col-md-4">
                        <h2><i class="fas fa-envelope-square"></i> Mail:</h2>
                        <p>life.care.ltd@gmail.com</p><br />
                        <p>care.life.ltd@yahoo.com</p>
                    </div>
                </div>
            </div>
            {/* contact area end */}
            {/* contact footer area import */}
            <Footer/>
        </div>
    );
};

export default Contact;