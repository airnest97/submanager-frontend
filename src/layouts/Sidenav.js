import React from 'react'
import {  NavLink } from "react-router-dom";
import './layout.css'

const SideNav = () => {


    return (
        <div className="sideNav">
            <div  className="navLink">
                <NavLink to="./" style={({  }) => ({
                    color: 'white', textDecoration: "none",   textAlign: "center", })}>
                        Subscriptions
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="./new-subscription" style={({ isActive } ) => ({
                    color: isActive ? '#dc4d01' : 'white' , textDecoration: "none", textAlign:"center" })}>
                    New Subscription
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="./wallet" style={({ isActive }) => ({
                    color: isActive ? '#dc4d01' : 'white' , textDecoration: "none",  textAlign: "center" })}>
                    Wallet
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="./payment" style={({ isActive }) => ({
                    color: isActive ? '#dc4d01' : 'white' , textDecoration: "none",  textAlign: "center" })}>
                    Make Payment
                </NavLink>
            </div>

            <div className="navLink">
                <NavLink to="./edit-user" style={({ isActive }) => ({
                    color: isActive ? '#dc4d01' : 'white' , textDecoration: "none",  textAlign: "center" })}>
                    Settings
                </NavLink>
            </div>
        </div>

    )
}

export default SideNav