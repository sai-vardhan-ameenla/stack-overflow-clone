import React ,{useCallback, useEffect} from "react"
import { useSelector , useDispatch} from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import logo from '..//assets/logo.png'
import search from '..//assets/search.svg'
import Avatar from "./Avatar/Avatar"
import {jwtDecode} from 'jwt-decode'
import './Navbar.css'
import {setCurrentUser} from "../actions/currentUser"


const Navbar=()=> {
    const navigate =useNavigate()
    const dispatch =useDispatch()
    var User= useSelector ((state) => (state.currentUserReducer))

    const handlelogout = useCallback(() => {
      dispatch({ type: 'LOGOUT' });
      navigate('/');
      dispatch(setCurrentUser(null));
    }, [dispatch, navigate]);
    
  
    useEffect(() => {
      const token = User?.token;
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          handlelogout();
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  
    }, [User?.token, dispatch, navigate,handlelogout]);
    
    

   
    
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
                          <Link to={`/Users/${User?.result._id}`} style={{textDecoration:"none"}}>
                            <Avatar padding={' 7px 10px'} backgroundColor={'blue'} borderRadius={'50%'} textAlign={'center'} color={'white'} fontSize={'12px'} cursor={'pointer'} marginTop={'4px '} textDecoration={'none'}>
                               {User.result.name.charAt(0).toUpperCase()}

                            </Avatar></Link>
                          <button className="nav-item nav-links" onClick={handlelogout}>Log out</button>
                </>
                
                
            }
                
            
        </div>
    </nav>
  )
}
export default Navbar


