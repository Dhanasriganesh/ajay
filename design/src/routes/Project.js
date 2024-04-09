import React from 'react'


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'
import Workcard from '../components/Workcard'
import Workcard2 from '../components/Workcard2'
import Workcard3 from '../components/Workcard3'

const Project = () => {
  return (
    <div>
      
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
      <Work/> 

      <Footer/>
    </div>
  )
}

export default Project