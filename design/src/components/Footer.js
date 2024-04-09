import { FaHome,FaPhone,FaMailBulk, FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa"
import "./Footerstyles.css"
import React from 'react'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                <div>
                  <p>Madhapur,Hyderabad</p>
                  <p>Telangana</p>
                </div>
                </div>
                <div className="phone">
                  <h4>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                9063081590
                </h4>
                </div>
                <div className="email">
                  <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                designstudioarchitects01@gmail.com
                </h4>
                </div>

            </div>
            <div className="right">
              <h4>About the Work</h4>
              <p>We don't just design spaces, we craft experiences.We create homes that tell your story.Working within your means.</p>
              <div className="social">
              <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/>
              <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/>
              <FaWhatsapp size={30} style={{color:"white",marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer