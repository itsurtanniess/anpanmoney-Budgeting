import React, { useContext, useState, useEffect } from 'react'
import {auth} from "../firebase"

const AuthContext= React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children}) {
    const [currentUser, setCurrentUser]= useState()
    const [loading, setLoading] = useState(true)

    function signup (username, email, password) {
        return auth.createUserWithUsernameAndEmailAndPassword(username, email, password)
    }
    function signin (email, password){
        return auth.signInWithEmailAndPassword(email, password)

    }

    useEffect(() => {
      const unsubscribe =  auth.onAuthStateChange(user => {
        setCurrentUser(user)
        setLoading(false)
      })

      return unsubscribe
    }, [])
    

    const value ={
        currentUser,
        signin,
        signup
    }
  return (
    <AuthContext.Provider value= {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

