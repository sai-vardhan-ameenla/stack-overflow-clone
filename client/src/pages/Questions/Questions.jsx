import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'



const Questions = () => {
  return (
    <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/Auth' Component={Auth}/>
    </Routes>
  )
}

export default  Questions