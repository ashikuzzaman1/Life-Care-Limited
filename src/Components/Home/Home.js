import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Data from '../Data/Data';
import './Home.css'
import Slide from '../Slide/Slide';

const Home = () => {

    // set all api data
    const [datas, setDatas] = useState([]);
    // load all the data from local storage
    useEffect(() => {
        fetch("/homeData.json")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        // main area start
        <div>
            {/* load menu area */}
            <Menubar/>
            {/* load slide area */}
            <Slide/>
            {/* main area all collect data map */}
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
            {/* load footer area */}
            <Footer/>
        </div>
    );
};

export default Home;