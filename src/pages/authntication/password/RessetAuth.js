import React from 'react';
import ForgotPasswordContd from "../../../components/authentication/ForgotPassword";
import {Routes, Route} from "react-router-dom";
import ResetPassword from "../../../components/authentication/ResetPassword";


const ResetAuth = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" element={ <ForgotPasswordContd/>}/>
                <Route path = "/reset-password" element={ <ResetPassword/>}/>
            </Routes>
        </div>
    );
};

export default ResetAuth;