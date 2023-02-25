import axios from "axios"
import { useEffect, useState } from "react"



const useFetch = (url, options, dependency) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const data = await axios(url,options)
            // console.log(data)
            setError(null)
            setData(data.data.payload)
        
        } catch (e) {
            console.log(e)
            setError(e)
        } finally {
            setLoading(false)
        }
    
    }

     
    
    useEffect(() => {
        getData()
    }, [dependency])
    return {
        data,
        error,
        loading
    }
}
export {useFetch }