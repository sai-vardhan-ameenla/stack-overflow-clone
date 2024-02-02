import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({questions}) => {
  return (
    
    <div className='display-question-container'>
        
        <div className='display-votes-ans'>
            <p>{questions.votes}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{questions.noOfAnswers}</p>
            <p>Answers</p>
        </div>
        <div className="display-question-details">
            <Link to={`/questions/${questions._id}`} className='questions-title-link'>{questions.questionTitle}</Link>
            <div className="display-tags-time">
                <div className="question-tags">
                {
                     questions.questionTags.map((tags)=>(
                        <p key={tags}>{tags}</p>
                    ))
                }
                </div>
                <p className="question-time">
                    asked {questions.time} {questions.userPosted}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Questions
