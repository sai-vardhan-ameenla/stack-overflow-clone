
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (authData) => API.post('/users/signup', authData);
export const logIn = (authData) => API.post('/users/login', authData);

export const postQuestion =(questionData) =>API.post('/questions/Ask',questionData)
export const getAllquestions =() =>API.get('/questions/get')
export const deleteQuestion = (id) =>API.delete(`/questions/delete/${id}`)

export const postAnswers =(id, noOfAnswers,answerBody,userAnswered)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered})
