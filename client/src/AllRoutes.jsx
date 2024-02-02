import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Auth from '../src/pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestions from './pages/AskQuestion/AskQuestions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Auth' element={<Auth />}/>
        <Route path='/Questions' element={<Questions />}/>
        <Route path='/AskQuestion' element={<AskQuestions />}/>
        <Route path="/questions/:id" element={<DisplayQuestion />}/>
    </Routes>
  )
}

export default  AllRoutes