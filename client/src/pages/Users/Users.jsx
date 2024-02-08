import React from 'react'
import './Users.css'
import LeftSide from '../../components/LeftSide/LeftSide'
import {useLocation} from 'react-router-dom'
import UsersList from './UsersList' 
export const Users = () => {

  // const location = useLocation() 

  return(
    <div className='home-container-1'>
      <LeftSide />
      <div className='home-container-2' style={{marginTop:'30px'}}> 
        <h1 style={{fontWeight:"400"}}>User</h1>
        <UsersList />

      </div>
    </div>
  )
}
