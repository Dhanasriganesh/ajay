import "./Navbarstyles.css"
import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa";
import Logo from "../assets/Ds.jpeg"


const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    const[color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY>=1){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
         <img className="logo"
            src={Logo} alt style={{marginRight: 0.2 + 'em'}} />
            </Link>
            
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/project" >Project</Link>  
                </li>
                <li>
                    <Link to="/contact" >Contact</Link> 
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"white"}}/>):( <FaBars size={20} style={{color:"white"}}/>)}
                
               
            </div>
    </div>
  )
}

export default Navbar