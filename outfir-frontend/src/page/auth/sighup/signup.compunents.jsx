import React from 'react'
import s from './signup.module.css'

import { useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { useAuth } from '../../../context/auth.provider'
import Uploder from '../../../components/uploader/uploder'

function SigninCompunents() {

  //navigate
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [Cpassword, setCPassword] = useState('')
  const [image , setImage] = useState('')

  // const [file , setFile] = useState({})
  //authContext
  const {signUp }=  useAuth()

  const handelSubmit = (e) => {
    e.preventDefault()


    if (!name && !email && !password && !Cpassword && !image) return alert("Fill the Form")
    
    if(password !== Cpassword) return alert('Password and Confirm Password Not Same')
    signUp({
      name,
      email,
      password,
      photo: image
    })
    setEmail('')
    setPassword('')
    return
    
  }

  const handelNavigate = (e) => {
    e.preventDefault()
   navigate('/signIn')
    
  }

  
  
  return (
    <div className={s.container}>
      <div className={s.form}>
        <h1>Sign UP</h1>
        
         {/* <div  className={s.signup_btn}>
        
          </div> */}
        <Uploder uploder={setImage} />
        <form onSubmit={handelSubmit}>
        <div  className={s.input}>
          <label htmlFor='name'>Name</label>
            <input type='text'
                required
                placeholder='name'
                area-label='name'
                value={name}
                onChange={(e) => {
                setName(e.target.value)
                 }
              }
            />
        </div>
      
        <div  className={s.input}>
          <label htmlFor='email'>Email</label>
            <input type='text'
                required
                placeholder='email'
                area-label='email'
                value={email}
                onChange={(e) => {
                setEmail(e.target.value)
                 }
              }
            />
        </div>

        <div  className={s.input}>
          <label htmlFor='password'>Password</label>
            <input type='password'
              required
              placeholder='password'
              area-label='password'
              autoComplete='on'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div  className={s.input}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password'
              required
              placeholder='Confirm password'
              area-label='Confirm password'
              autoComplete='on'
              value={Cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
        </div>

          
        <div  className={s.signup_btn}>
         <button>SignUp</button>
          </div>
          <div className={s.notAuser} onClick={handelNavigate}>
            <p className={s._Na}>Already  a User</p>
          </div>
        </form>
        </div>
      </div>
    
  )
}

export default SigninCompunents