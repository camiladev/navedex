import Layout from "../components/Layout";
import '../styles/login.css'
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Login(){
    const { handleLogin, handleInputEmail, handleInputPass } = useContext(AuthContext)
    
    return(
        
            <Layout>
                <div className='container-login'>
                    <header>
                        
                    </header>
                    <main>
                        <form>
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
                            <button  className='button' onClick={handleLogin} >Entrar</button>
                        </form>
                    </main>
                    
                </div>

            </Layout>

        
    )
}