import Layout from "../components/Layout";
import '../styles/login.css'
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';
import { useHistory } from "react-router-dom";

export default function Login(){
    const { onAuthenticated, handleInputEmail, handleInputPass } = useContext(AuthContext)
    const history = useHistory();

    async function onSubmit(event){
        event.preventDefault();
        
        const request = await onAuthenticated();
        console.log('res',request)
        if(request){
            return history.push('/navers')
        }
    }
    
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