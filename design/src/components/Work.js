
import "./Workstyles.css"
import Workcard from "./Workcard"
import Workcarddata from "./Workcarddata"
import React from 'react'
import Workcard2 from "./Workcard2"
import Workcard3 from "./Workcard3"


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          <div>
            <Workcard/>
            <Workcard2/>
            <Workcard3/>
          </div>
        </div>
    </div>
  )
 
}

export default Work