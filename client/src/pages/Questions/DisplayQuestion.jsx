import React from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
const DisplayQuestion = () => {

  return (
    <div className='home-container-1'>
      <LeftSide />
      <div className='home-container-2'>
        <QuestionDetails />
        <RightSidebar />
      </div>
      
    </div>
  )
}

export default DisplayQuestion
