import React, {useState} from 'react';
import './layout.css'
import {FaBars, FaTimes} from "react-icons/fa"
import {useNavigate} from "react-router";

const NavBar = () => {
 const  navigate = useNavigate()
    const[showNav, setShowNav] = useState(false)
    const showNavbar = () =>{
        setShowNav(!showNav)
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <h1 style={{color: "var(--orange"}}>SUB MANAGER</h1>
                </div>

                <ul className ={`${showNav ? 'openModal' : 'closeModal'}`}>
                    <li>Home</li>
                    <li>Subscriptions</li>
                    <li  onClick={() => navigate("/auth") }>Sign Up/ Login</li>
                    <button className="nav-btn nav-close" onClick={showNavbar} style={{backgroundColor: "var(--orange)", padding:".5rem", border:"none"}}>
                        <FaTimes fontSize={40} color= "white"/>
                    </button>
                </ul>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </nav>
        </div>
    );
};

export default NavBar;