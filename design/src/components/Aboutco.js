import { Link } from "react-router-dom"
import "./Aboutcost.css"
import React from 'react'

const Aboutco = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I ?</h1>
            <p>I'm an interior designer with a passion for transforming spaces into beautiful and functional havens. I collaborate closely with my clients to understand their vision and create personalized designs that reflect their unique style and needs.</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Aboutco