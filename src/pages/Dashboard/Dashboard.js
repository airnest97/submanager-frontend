import React from "react";
import Container from "../../layouts/Container";
import {Routes} from "react-router";
import Subscriptions from "../../components/dashbaord/Subscriptions";
import {Route} from "react-router-dom";
import "./dashbaord.css"
import Header from "../../layouts/Header";
import NewSubscription from "../../components/dashbaord/NewSubscription";
import UpdateSubscription from "../../components/dashbaord/UpdateSubscription";
import UpdateUser from "../../components/dashbaord/updateUser";
import Wallet from "../../components/dashbaord/Wallet";
import Payment from "../../components/dashbaord/Payment";
import RequireAuth from '../../util/RequiredAuth';
import CreateSubscription from "../../components/dashbaord/CreateSubscription";



const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className='dashboardContainer'>
                <Container>
                    <RequireAuth>
                    <Routes>
                        <Route path="/" element={<Subscriptions/>} />
                        <Route path="/new-subscription" element={<CreateSubscription/>} />
                        <Route path="/edit-subscription" element={<UpdateSubscription/>} />
                        <Route path="/edit-user" element={<UpdateUser/>} />
                        <Route path="/wallet" element={<Wallet/>} />
                        <Route path="/payment" element={<Payment/>} />
                    </Routes>
                    </RequireAuth>
                    
                </Container>

            </div>
        </div>

    )
}

export default Dashboard