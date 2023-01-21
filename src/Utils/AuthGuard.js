
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from 'react';

export default function AuthGuard({children, uri }) {

    const {isadminlogged} = useContext(AuthContext)

    const unguardedroutes = ['/', 'signin', '/signup', '/forgetpassword']
 
    const unguardeduri =  unguardedroutes.includes(uri)

    
    if (!unguardeduri &&  !isadminlogged) {
        return <Navigate to={'/signin' }/> 
    } else if (unguardeduri &&  isadminlogged) {
       return <Navigate to={'/dashboard' }/>
    } else {
        return children
    }

}
