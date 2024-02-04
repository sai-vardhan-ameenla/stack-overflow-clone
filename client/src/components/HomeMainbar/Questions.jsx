import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  return (
    
    <div className='display-question-container'>
        
        <div className='display-votes-ans'>
            <p>{question.upVotes.length - question.votes.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>Answers</p>
        </div>
        <div className="display-question-details">
            <Link to={`/questions/${question._id}`} className='questions-title-link'>{question.questionTitle}</Link>
            <div className="display-tags-time">
                <div className="question-tags">
                {
                     question.questionTags.map((tags)=>(
                        <p key={tags}>{tags}</p>
                    ))
                }
                </div>
                <p className="question-time">
                    asked {question.time} {question.userPosted}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Questions
