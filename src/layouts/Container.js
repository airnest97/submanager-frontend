import React from 'react'
import SideNav from '../layouts/Sidenav'

const Container = (props) => {
    return (
        <>
                <SideNav/>
                <div className='dashboardBodyContainer'>
                    {props.children}
                </div>
        </>
    )
}

export default Container