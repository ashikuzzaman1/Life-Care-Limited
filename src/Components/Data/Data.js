import React from 'react';
import './Data.css';

const Data = (props) => {
    const {consultants,name,degree,fees,img} = props.data || {};
    return (
        // all loaded data show using card
        <div className="col-md-6 card-area">
            <div class="card h-100 gap-3">
                <div class="row g-0 card-img-area p-3">
                    <div class="col-md-5">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title"><b>Consultants: </b>{consultants}</h5>
                            <p class="card-text"><b>Name: </b>{name}</p>
                            <p class="card-text"><b>Degree: </b>{degree}</p>
                            <p class="card-text"><b>Fees: </b>{fees}</p>
                            <button type="button" class="btn btn-primary"><i class="fas fa-registered"></i> Make An Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;