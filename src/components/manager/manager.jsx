import React from "react"
// import { Link } from "react-router-dom"
import { Outlet, useNavigate } from "react-router-dom"
export const Manager = () => {
    const navigate = useNavigate()
    return <div>
        <h1>Hello Manger</h1>
        <div id="allLinks">
        <button onClick={() => navigate('students')}>תלמידים</button>
        <button onClick={()=>navigate('paerntM')} >הורים</button>
        <button onClick={()=>navigate('events')} >אירועים</button>
        </div>
        <Outlet />
    </div>
}