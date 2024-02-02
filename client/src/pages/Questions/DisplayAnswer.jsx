import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({questions}) => {
  return (
    <div>
        {
            questions.answer.map(ans=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                    <div>
                                                <button type='button'>share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>answer {ans.answeredOn}</p>
                                                <Link to={`/User/${questions.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'> {questions.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {questions.userPosted}
                                                    </div>

                                                </Link>
                                            </div>
                    </div>
                </div>
            ))
        }
     
    </div>
  )
}

export default DisplayAnswer
