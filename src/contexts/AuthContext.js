import { createContext, useState } from "react";
import Api from '../services/api'
import  { Redirect } from 'react-router-dom'

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
    function handleLogin(){
        const response = Api.getLogin({ email, pass}).then( token => {
            setToken(token)
            setIsAuthenticated(true)           

            return <Redirect to='/navers'  />
        }).catch()
    }
 

    return(
        <AuthContext.Provider value={{
            handleLogin,
            handleInputEmail,
            handleInputPass,
            token,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}