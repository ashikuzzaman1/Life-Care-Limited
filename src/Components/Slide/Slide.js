import React from 'react';
import './Slide.css';
import image from '../../images/banner.png';

const Slide = () => {
    return (
        // slide area start
        <div className="slide-area">
            <div className="container">
                <div className="row">
                    {/* slide area image load */}
                    <div className="col-md-7 image-area">
                        <img className="w-100" src={image} alt="" />
                    </div>
                    {/* slide area text load */}
                    <div className="col-md-5 text-area">
                        <h2>The secret of a long life is to never trust a doctor.</h2>
                        <p>Millions of Americans today are taking dietary supplements, practicing yoga and integrating other natural therapies into their lives. These are all preventive measures that will keep them out of the doctor's office and drive down the costs of treating serious problems like heart disease and diabetes.</p>
                        <input type="text" className="form-control mb-3" placeholder="Search Here!" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button className="btn btn-primary"><i class="fas fa-registered"></i> Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;