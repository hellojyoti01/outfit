import React from 'react'

import { useState} from 'react';
import Nav from '../../../components/navigation/navigation';
import Product from '../../../components/product/productComponents';
import { useFetch } from '../../../hook/useFetch';
import s from './home.module.css'
import Loading from '../../../components/loading/loading';


function HomeCompunents() {

  const [page, setPage] = useState(1)
  
  const { data, error, loading } = useFetch(`product?limit=30&page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    },
    query: {
      select: 'title  thumbnail price brand '
    }
  }, page)
  
  //Create empty array
  const arr = new Array(20).fill(0)

  
  return (
    <>
      <Nav />
      <div className={s.product_page}>
        {
          !loading ? (
          !error ? (
              data.map((el) => <Product {...el} key={ el._id}  />) 
            ) : (<h1>SomeThing Wrong</h1>)
          ) : (
              <Loading />
          )

        }
        
      </div>
      

      {/*Loop to array */}
     <footer className={s.footer_pagination}>
      {
        arr.map((el, index) => {
          return (
            <div key={index} className={s.pagination} onClick={()=>{setPage(index + 1)}}>{ index + 1}</div>
          )
        })
        }
        
        </footer>
    </>
  )
}

export default HomeCompunents;
