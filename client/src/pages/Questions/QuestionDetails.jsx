import React from 'react'
import upvote from '../../assets/sort-up.svg'
import downvote from'../../assets/sort-down.svg'
import { Link, useParams } from 'react-router-dom';
import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';

const QuestionDetails = () => {
    const { id } = useParams();
    var questionList = [{
        _id:'1',
        upVotes:4,  
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:['java ','node js','react js','mongo'],
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
        _id:'2',
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
        _id:'3',
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
      }];
      console.log(id);
  return (
    <div className='question-details-page'>
        <div>
            <h1>hello</h1>
        </div>
        {
            questionList === 0       ?
            <h1>Loading..</h1>:
            <>
                {
                    questionList.filter(questions=>questions._id === id).map(questions=>(
                        <div key= {questions._id }>
                            {
                                console.log(questions)
                            }
                            <section className="question-details-container" >
                                <h1>{questions.questionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className="question-votes">
                                        <img src={upvote} className='votes-icon' alt='' width='18px' />
                                        <p>{questions.upVotes - questions.votes}</p>
                                        <img src={downvote} className='votes-icon' alt='' width='18px'/>
                                    </div>
                                    <div style={{width:'100%'}}>
                                        <p className="question-body">{questions.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                questions.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                        <div>
                                                <button type='button'>share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>anked {questions.time}</p>
                                                <Link to={`/User/${questions.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'> {questions.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {questions.userPosted}
                                                    </div>

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                questions.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>
                                            {questions.noOfAnswers} answers
                                        </h3>
                                        <DisplayAnswer key={questions._id} questions={questions} />
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>
                                    Your Answer
                                </h3>
                                <form > 
                                    <textarea name="" id="" cols="30"  rows="10"></textarea><br   />
                                    <input type='submit' className='post-ans-btn' value='Post Your Answer' />
                                </form>
                                <p className='bottom'>
                                    Browse other Question tagged
                                    {
                                        questions.questionTags.map((tag)=>(
                                            <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                        ))
                                    }
                                    or
                                    <Link to='/AskQuestion' style={{textDecoration:'none',color:"#009dff"}}>ask your own question</Link>
                                </p>
                            </section>

                        </div>
                    ))
                }

            </>
        }
       
    </div>

  )
}

export default QuestionDetails