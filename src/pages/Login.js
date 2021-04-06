import Layout from "../components/Layout";
import '../styles/login.css'
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Login(){
    const { onAuthenticated, handleInputEmail, handleInputPass, isAuthenticated } = useContext(AuthContext)
    const history = useHistory();

    async function onSubmit(event){
        event.preventDefault();
        
        const request = await onAuthenticated();       
        
    }

    useEffect(() => {
        if(isAuthenticated){
            
            return history.push('/navers')
        }
    },[isAuthenticated])
    
    return(
        
            <Layout>
                <div className='container-login'>
                    <header>
                        
                    </header>
                    <main>
                        <form onSubmit={onSubmit}>
                            <label>
                                E-mail
                            </label>
                                <input type='text' 
                                       name='email' 
                                       placeholder= 'E-mail'
                                       onChange={handleInputEmail} />
                            <label>
                                Senha
                            </label>
                                <input type='password' 
                                       name='pass' 
                                       placeholder= 'Senha'
                                       onChange={handleInputPass}
                                        />
                            <button  type='submit' >Entrar</button>
                        </form>
                    </main>
                    
                </div>

            </Layout>

        
    )
}