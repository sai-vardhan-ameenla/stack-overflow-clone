import React from 'react'
import '../../../src/App.css';
import LeftSide from '../../components/LeftSide/LeftSide'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


const Home = () => {
  return (
    
    <div className='home-container-1'>
      <LeftSide />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
      
    </div>
  )
}

export default Home
