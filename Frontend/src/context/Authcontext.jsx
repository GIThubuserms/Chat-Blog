import React, {createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'

export const Authcontext = createContext()


export const Authprovider = ({ children }) => {
     
     
    const usertokenanddata = Cookies.get('jwt') || localStorage.getItem('messenger')
   
    //const [userdata, setuserdata] = useState(usertokenanddata ? JSON.parse(usertokenanddata):undefined)
    const [userdata, setuserdata] = useState(usertokenanddata?usertokenanddata:undefined)
    return <Authcontext.Provider value={{ userdata, setuserdata }}>
        {children}
    </Authcontext.Provider>
}

export function useAuth(){
    return useContext(Authcontext)
}
