import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const Services = () => {
    const [datas, setDatas] = useState([]);
    // load all the data from storage
    useEffect(() => {
        fetch("/serviceData.json")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        // service area start
        <div>
            <Menubar/>
            <div className="main-area">
                <div className="container">
                        <div className="row">
                            {
                                datas.map(data => <Data
                                key={data.key}
                                data={data}
                                />)
                            }
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Services;