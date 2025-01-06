import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'


export const getallusers =()=> {
    const [allusers, setallusers] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const token=Cookies.get('jwt')
        const dbcall = async () => {
            try {
                setloading(true)
                const response = await axios.get('/api/v1/user/getuserprofile', {
                withCredentials:true,
                headers:{
                    'Authorization':`Bearer ${token}`
                }
                })
                console.log(response.data.allusers);
                setallusers(response.data.allusers)
                setloading(false)
            }
            catch (error) {
             throw new Error(error);
            }
        }
        dbcall()
    }, [])
    return [allusers,setloading]
}