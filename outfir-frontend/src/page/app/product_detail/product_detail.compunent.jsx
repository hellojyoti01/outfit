import React from 'react'

import {useFetch} from '../../../hook/useFetch'

import { useParams } from 'react-router-dom'
function ProductDetail() {

    const { id } = useParams()
    const {data, error , loading}= useFetch(`/product/${id}`)

    console.log(data)


    return (
        <div>Product Detail</div>
    )
}
export default ProductDetail