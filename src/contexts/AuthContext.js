import { createContext, useState } from "react";
import Api from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [token, setToken] = useState();

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
            return response;
        }).catch()
        
    }

    return(
        <AuthContext.Provider value={{
            handleLogin,
            handleInputEmail,
            handleInputPass,
            email,
            pass,
            token
        }}>
            {children}
        </AuthContext.Provider>
    )
}