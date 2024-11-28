import React from 'react';
import { useNavigate } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <header></header>
            <div className="slider">
                <div className="list">
                    <div className="item">
                        <div className="content">
                            <div className="title">LOBBY</div>
                            <div className="type">SISTEM AKADEMIK</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio.
                                Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, aut.
                            </div>
                            <div className="button">
                                <button onClick={() => navigate('/login')}>LOGIN</button> {/* Redirect to login */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
