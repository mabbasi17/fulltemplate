import React, { useState } from 'react'
import { createContext } from 'react'

 const AuthContext = createContext()
  
 const AuthContextProvider = (props) => {
    
const [isadminlogged , Setisadminlogged]=useState(true)
  
    
    return (
   <AuthContext.Provider value={{ isadminlogged , Setisadminlogged }}>
          {props.children}
    </AuthContext.Provider>
    )
}

export {AuthContext , AuthContextProvider }
