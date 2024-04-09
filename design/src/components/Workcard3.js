import "./Workcardstyles.css"
import React from 'react'
import I from "../assets/I.jpeg"
import { NavLink } from "react-router-dom"

const Workcard3 = () => {
  return (
    <div className="project-card">
    <img src={I} alt="image"/>
    <h2 className="project-title">STEPS</h2>
    <div className="pro-details">
        <p>GLASS</p><br/>
        <div className="pro-btns">
        {/* <NavLink to="url.com" className="btn">View
            </NavLink>
            <NavLink to="url.com" className="btn">Source
            </NavLink> */}
            </div>
    </div>
</div>
  )
}

export default Workcard3