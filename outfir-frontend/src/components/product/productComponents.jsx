import React from 'react'
import s from './product.module.css'

import { useNavigate } from 'react-router-dom'
function Product(props) {
  const {title , _id , thumbnail , brand , price} = props
  const navigate = useNavigate()
  const handelNavigate = () => {
    navigate(`/product/${_id}`)
  }
  
  return (
    <div  className={s.wrapper} onClick={handelNavigate}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{brand}</p>
      <p>{ price}</p>
    </div>
  )
}

export default Product