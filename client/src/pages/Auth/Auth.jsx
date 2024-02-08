import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import {login, signup} from '../../actions/auth'
import {useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'



const Auth = () => {
    const [IsSign, setIsSign] = useState(false)
    const [name , setName ] =useState('')
    const [email ,setEmail] =useState('')
    const [password , setPassword]=useState('')
    const dispatch =useDispatch()
    const navigate =useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!email || !password){
            alert('Enter email and password')
            
        }
        
        if(IsSign){
            if(!name){
                alert('Enter name to continue')
                
            }
            
            dispatch(signup({name, email, password}, navigate));
        }
        else{
            
            dispatch(login({email, password}, navigate))
            
        }
    }

    const handleSwitch =() =>{
        setIsSign(!IsSign)
    }
  return (
    <section className='auth-section' >
        {IsSign && <AboutAuth />}
        <div className='auth-container'>
            {!IsSign && <img src={icon} alt="stack overflow"  className='icon'/> }
            <form onSubmit={handleSubmit} >
                {
                    IsSign &&(
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
                    {!IsSign && (<p style={{color:'rgb(0, 122, 198)', fontSize:'16px' ,fontWeight:'bold'}}>
                        forget password ?
                    </p> )}</div>
                    <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
                    {IsSign && (<p>Passwords must contain at least eight<br/>characters, including at least 1 letter and 1<br/>number.</p>)}
                    {IsSign && (<label htmlFor='check'  className='check'>
                        <input type="checkbox" className='check1' />
                        <p >Opt-in to receive occasional<br/>
                            product updates, user research invitations,<br/>
                            company announcements, and digests.</p>
                    </label>)}
                </label>
                <button type='submit' className='auth-btn'>{IsSign ? 'Sign up ' :'Log In'}</button>
                {
                IsSign && (
                    <p className='span'>By clicking “Sign up”, you agree to our
                        <span > terms of<br/>service</span> 
                        <span >privacy policy </span> and 
                        <span >cookie policy</span></p>
                )
            }
            </form>
           
            
             <p style={{fontSize:'16px',textAlign:'center'}}>
                {IsSign ? 'Already have an account?':'Don\'t have an account ? ' }
                <button type='button' className='handleswitch-btn' onClick={handleSwitch}>{IsSign ? 'Log in' : 'Sign up'}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
