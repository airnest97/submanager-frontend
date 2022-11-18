import LandingPage from "./pages/landingPage/LandingPage";
import Auth from "./pages/authntication/Auth";
import { Routes, Route} from "react-router-dom";
import ResetAuth from "./pages/authntication/password/RessetAuth";
import ResetPassword from "./components/authentication/ForgotasswordContd";
import React, {useState} from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import {authContext} from "./store/context";


function App() {
    const restoredAuth = JSON.parse(window.sessionStorage.getItem("auth")) || {}
    const [authDetails, setAuthDetails] = useState(restoredAuth);

    const updateAuthDetails = (newDetails) => {

        const updatedAuth = {...authDetails, ...newDetails};

        setAuthDetails(updatedAuth);

        window.sessionStorage.setItem("auth", JSON.stringify(updatedAuth));
    }
  return (
    <div className="App">
        <authContext.Provider value={{auth: authDetails, updateAuth: updateAuthDetails}}>
        <Routes>
            <Route path = "/" element ={ <LandingPage/>}/>
            <Route path = "/auth" element ={<Auth/>}/>
            <Route path = "/dashboard/*" element ={<Dashboard/>}/>
            <Route path = "/reset-auth/*" element ={<ResetAuth/>}/>
            <Route path = "/reset-password" element={ <ResetPassword/>}/>
        </Routes>
        </authContext.Provider>
    </div>
  );
}

export default App;
