import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client'
import { useAuth } from "./Authcontext";

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
    const [socket, setsocket] = useState(null)
    const [loggedinusers, setloggedinusers] = useState([])
    const {userdata}=useAuth()
    useEffect(() => {

        if (userdata) {
            const Socket = io('http://localhost:5002/', { query: { userId: userdata?.user._id } })
            setsocket(Socket)
            console.log(socket);
            
            Socket.on('onlineusers', (users) => {
                setloggedinusers(users)
            })
            Socket.on('updatedonlineuser', (users) => {
                setloggedinusers(users)
            })
            return () => Socket.close()
        }
        else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[userdata])

    return (
        <SocketContext.Provider value={{ socket, loggedinusers }}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () => {
    return useContext(SocketContext)
}

