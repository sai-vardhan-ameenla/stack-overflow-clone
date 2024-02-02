import React from "react"
import { Link } from "react-router-dom"
import logo from '..//assets/logo.png'
import search from '..//assets/search.svg'
import Avatar from "./Avatar/Avatar"
import './Navbar.css'


const Navbar=()=> {
    var User=null
  return (
    <nav className="main-nav">
        <div className="navbar">
            <Link to='/' className="nav-item nav-logo">
                <img src={logo} alt="logo"></img>
            </Link>
            <Link to='/' className="nav-item nav-btn">About</Link>
            <Link to='/' className="nav-item nav-btn">Products</Link>
            <Link to='/' className="nav-item nav-btn">For Teams</Link>
            <form>
                <input type="text" placeholder="search.." />
                <img src={search} alt="search" width={17} className="search-icon"/>
            </form>
            {
                User === null ?
               
                
                <Link to='/Auth' className="nav-item nav-links">Log In</Link>:
                <>
                          <Link to='/' style={{textDecoration:"none"}}><Avatar padding={' 7px 10px'} backgroundColor={'blue'} borderRadius={'50%'} textAlign={'center'} color={'white'} fontSize={'12px'} cursor={'none'} marginTop={'4px '} textDecoration={'none'}>M</Avatar></Link>
                          <button className="nav-item nav-links">Log out</button>
                </>
                
                
            }
                
            
        </div>
    </nav>
  )
}
export default Navbar


