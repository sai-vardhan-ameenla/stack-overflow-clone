import React from 'react'
import {useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'
import {useNavigate} from 'react-router-dom'


const HomeMainbar = () => {
  const Location =useLocation()
  const navigate =useNavigate()
  var questionList = [{
    _id:1,
    upVotes:4,
    votes:3,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:['java','node js','react js','mongo'],
    userPosted:'mano',
    userId:1,
    answer:[{
        answerBody:'Answer',
        unserAnswered :'kumar',
        answeredOn:'jan 2',
        userId:2      
    }],
    time:'jan 1'
  },{
    _id:2,
    upVotes:4,
    votes:2,
    noOfAnswers:0,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:['javascript','R','python'],
    userPosted:'mano',
    userId:2,
    answer:[{
      answerBody:'Answer',
      unserAnswered :'kumar',
      answeredOn:'jan 2',
      userId:2      
  }],
    time:'jan 1'
  },{
    _id:3,
    upVotes:4,
    votes:1,
    noOfAnswers:0,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:['javascript','R','python'],
    userPosted:'mano',
    answer:[{
      answerBody:'Answer',
      unserAnswered :'kumar',
      answeredOn:'jan 2',
      userId:2      
  }],
    userId:1,
    time:'jan 1'
  }]
  
  const user =1
  
  const redirect= () => {

    if (user ==null){
      alert("login or signup to ask a question");
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          Location.pathname ==='/'? <h1>Top Questions</h1> :<h1>All Questions</h1>
        }
        <button  onClick={redirect} className='ask-btn'>Ask Questons</button>
      </div>
      {
        questionList === null ? <h2>Loading....</h2> :
        <>
        <p> {questionList.length} questions</p>
        {
          questionList.map((questions)=>(
            <Questions questions={questions} key={questions._id} />
          )
          )
  
        }
        
        </>
      }
      
    </div>
  )
}

export default HomeMainbar
