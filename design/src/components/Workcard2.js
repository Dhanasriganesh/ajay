import "./Workcardsty.css"
import React from 'react'
import D from "../assets/D.jpeg"
import { NavLink } from "react-router-dom"

const Workcard2 = () => {
  return (
    <div className="project-card">
    <img src={D} alt="image"/>
    <h2 className="project-title">WALLS</h2>
    <div className="pro-details">
        <p>PAINTED</p><br/>
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

export default Workcard2