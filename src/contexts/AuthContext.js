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
        const response = Api.getLogin({ email, pass}).then( token => {
            if(token >= 400){
                alert('E-mail e/ou senha incorreto !! ')
            }
            else{
                setToken(token)
                setIsAuthenticated(true)          
    
                return response
            }
            
        }).catch( error => {
            alert('E-mail e/ou senha incorreto !! ')
        })

    }

    function logOut(){
        setToken('')
        setIsAuthenticated(false) 
    }

   
 

    return(
        <AuthContext.Provider value={{
            onAuthenticated,
            handleInputEmail,
            handleInputPass,
            logOut,
            token,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}