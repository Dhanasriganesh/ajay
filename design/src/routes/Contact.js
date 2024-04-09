import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Forms from '../components/Forms'
const Contact = () => {
  return (
  
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Lets have a conversation"/>
     <Forms/>
      <Footer/>
    </div>
  )
}

export default Contact