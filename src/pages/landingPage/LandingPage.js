import React from 'react';
import NavBar from "../../layouts/NavBar";
import "./landingPage.css"
import introImage from "../../assets/Subscriptions-amico (1).png";
import {useNavigate} from "react-router";

const LandingPage = () => {
    const  navigate = useNavigate()
    return (
        <div className="landingPageBody">
            <NavBar/>
            <div className="intro">
                <div className="text">
                    <h1>Manage All Of Your Subscriptions In One Place!</h1>
                    <button  onClick={() => navigate("/auth") }>SignUp/ Login</button>
                </div>

                <div className="picture">
                    <img src={introImage} alt="into"/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;