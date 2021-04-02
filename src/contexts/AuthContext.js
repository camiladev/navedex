import { createContext, useState } from "react";
import Api from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [token, setToken] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
       

    function handleInputEmail(value){
        const user = value.target.value;
        setEmail(user)

    }
    function handleInputPass(value){
        const senha = value.target.value;
        setPass(senha)

    }
    function onAuthenticated(){
        const res = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MTczODU2NjV9.pLOIeEZgsnTrlpUfbYbMt-IomjDldih3lzAch4LO3sw'
        // const response = Api.getLogin({ email, pass}).then( token => {
            setToken(res)
            setIsAuthenticated(true)           

        //     return response
        // }).catch()

        return res
    }

   
 

    return(
        <AuthContext.Provider value={{
            onAuthenticated,
            handleInputEmail,
            handleInputPass,
            token,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}