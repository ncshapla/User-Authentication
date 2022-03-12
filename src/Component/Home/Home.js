import React from 'react';
import img from '../../Img/img.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Wanna get Surprise</h1>
                    <h3>
                        <Link to = "/surprise">Click here</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Home;