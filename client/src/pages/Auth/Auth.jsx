import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import {login, signup} from '../../actions/auth'
import {useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'



const Auth = () => {
    const [IsSignup, setIsSignup] = useState(false)
    const [name , setName ] =useState('')
    const [email ,setEmail] =useState('')
    const [password , setPassword]=useState('')
    const dispatch =useDispatch()
    const navigate =useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault(0)
        if(!email && !password){
            alert('Enter email and password')
        }
        if(!name){
            alert('Enter email and password')
        }
        if(IsSignup){
            
            dispatch(signup({ name, email, password }),navigate)
        }
        else{
            dispatch(login({ email, password }),navigate);
            
        }
    }

    const handleSwitch =() =>{
        setIsSignup(!IsSignup)
    }
  return (
    <section className='auth-section' >
        {IsSignup && <AboutAuth />}
        <div className='auth-container'>
            {!IsSignup && <img src={icon} alt="stack overfloew"  className='icon'/> }
            <form onSubmit={handleSubmit}>
                {
                    IsSignup &&(
                        <label htmlFor='displayname'>
                        <h3>
                            Display Name
                        </h3>
                    <input type='text' name='displayname' id='displayname' onChange={(e)=>{setName(e.target.value)}}></input>
                    </label>
                    )
                }
                <label htmlFor='email'>
                    <h3>
                        Email
                    </h3>
                    <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex',justifyContent:'space-between'}}><h3>
                        Password
                    </h3>
                    {!IsSignup && (<p style={{color:'rgb(0, 122, 198)', fontSize:'16px' ,fontWeight:'bold'}}>
                        forget password ?
                    </p> )}</div>
                    <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
                    {IsSignup && (<p>Passwords must contain at least eight<br/>characters, including at least 1 letter and 1<br/>number.</p>)}
                    {IsSignup && (<label htmlFor='check'  className='check'>
                        <input type="checkbox" className='check1' />
                        <p >Opt-in to receive occasional<br/>
                            product updates, user research invitations,<br/>
                            company announcements, and digests.</p>
                    </label>)}
                </label>
                <button type='submit' className='auth-btn'>{IsSignup ? 'Sign up ' :'Log In'}</button>
                {
                IsSignup && (
                    <p className='span'>By clicking “Sign up”, you agree to our
                        <span > terms of<br/>service</span> 
                        <span >privacy policy </span> and 
                        <span >cookie policy</span></p>
                )
            }
            </form>
           
            
             <p style={{fontSize:'16px',textAlign:'center'}}>
                {IsSignup ? 'Already have an account?':'Don\'t have an account ? ' }
                <button type='button' className='handleswitch-btn' onClick={handleSwitch}>{IsSignup ? 'Log in' : 'Signup'}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
