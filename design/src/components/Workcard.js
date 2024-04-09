import "./Workcardst.css"
import React from 'react'
import project from "../assets/project.jpeg"
import { NavLink } from "react-router-dom"

const Workcard = () => {
  return (
    <div className="project-card">
    <img src={project} alt="image"/>
    <h2 className="project-title">CIELING</h2>
    <div className="pro-details">
        <p>Imported</p><br/>
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

export default Workcard