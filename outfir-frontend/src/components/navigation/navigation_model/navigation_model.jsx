

import React from 'react'

import s from './navigation_model.module.css'

function Navigation_model({ item, open }) {
  
  let newArr = item.slice(0,8)
  
  return (
    <>
      
      { open ?
        <ul className={s.search_model}>{
          newArr.map((el, idx) => {
            return <li key={idx}>{el}</li>
          })
        }</ul>
        : ""
      
      }
      </>

  )
}

export default Navigation_model