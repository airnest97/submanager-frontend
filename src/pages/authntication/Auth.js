import React, {useState} from 'react';
import "./Authentication.css"
import Register from "../../components/authentication/Register";
import authAnime from "../../assets/auth-anime.svg"
import Login from "../../components/authentication/Login";

const Auth = () => {
    const [inLoginMode, setInLoginMode] = useState(false);

    return (
        <div className="authentication-page">

            <div className="logo">
                <h1 style={{color: "var(--orange"}}>SUB MANAGER</h1>
            </div>


            <div className="auth">
                <div className="auth-anime">
                    <img src={authAnime} alt="anime"/>
                </div>
                <div className="login-reg">
                    <div className="welcome-text">
                        <h1>WELCOME!</h1>
                        <p onClick={() => setInLoginMode(!inLoginMode)}>
                            {inLoginMode
                                ? "Don't have an account? SignUp"
                                : "  Already a user? Login"}
                        </p>
                    </div>

                    {inLoginMode ? <Login /> : <Register change={setInLoginMode} />}
                </div>

            </div>
            }
        </div>

    );
};

export default Auth;