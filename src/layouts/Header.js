import React, { useState, useContext, useCallback, useEffect } from 'react';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { authContext } from "../store/context"


const Header = () => {
    const navigate = useNavigate()
    const { auth } = useContext(authContext);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})


    const getUser = useCallback(async () => {
        setLoading(true);
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
            },
        };
        let url = `https://submanage.herokuapp.com/api/v1/user/${auth.userId}`

        const response = await fetch(url, options);

        if (response.ok) {
            const data = await response.json();
            setUser(data.data);
            setLoading(false);
        }

    }, [auth.token, auth.userId, setUser]);

    useEffect(() => {
        getUser();
    }, [getUser]);



    return (
        <div className="dashboardHeader">
            <div className="logo">
                <h2 style={{ color: "var(--orange", }}>SUB MANAGER</h2>
            </div>



            <div className="user-logout">
                <div className='user'>
                    <h3>{user.firstName} {user.lastName}.</h3>
                </div>
                <div className="logout" >
                    <FiLogOut fontSize={20} color='white' onClick={() => {
                        window.sessionStorage.clear()
                        navigate("/auth")

                    }} />
                </div>
            </div>

        </div>
    );
};

export default Header;