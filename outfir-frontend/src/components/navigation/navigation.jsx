import React from 'react'
import s from './navigation.module.css'
import { useAuth } from '../../context/auth.provider'
import {useNavigate} from 'react-router-dom'

function Navigation() {
  const { user ,  signOut } = useAuth()
  
  // console.log(user , "Profile User")
  const navigate = useNavigate()
  const handelLognIn = (e) => {
    e.preventDefault()
    navigate('/signIn')
   }
  const handelLogOut = (e) => {
    e.preventDefault()

    signOut()
  }
  return (
    <nav className={s.wrapper}>
      <div className={s.left}>
        <img src='../../../public/logo.svg' alt={`logo`} />
      </div>
      <div className={s.search_box}>
        <input />
        <img src='../../../public/filter_timeline.svg'  alt='filter' />
      </div>
      <div className={s.content_menu}
        onClick={user ? handelLogOut : handelLognIn}
      >
        <img src={ user ? user.payload.profile : '../../../public/login-.svg' } alt="profile" />
      </div>
    </nav>
  )
}

export default Navigation