import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
    
    <div className='display-question-container'>
        
        <div className='display-votes-ans'>
            <p>{question.upVote.length - question.downVote.length}</p>
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
                    asked {moment(question.time).fromNow()} {question.userPosted}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Questions
