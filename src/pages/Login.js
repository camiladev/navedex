import Layout from "../components/Layout";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';



export default function Login(){
    const { handleLogin, handleInputEmail, handleInputPass } = useContext(AuthContext)

    return(
        
            <Layout>
                <div className='container-login'>
                    <header>
                        <h1>nave.rs</h1>
                    </header>
                    <main>
                        <form>
                            <label>
                                E-mail
                                <input type='text' name='email' onChange={handleInputEmail} />
                            </label>
                            <label>
                                Senha
                                <input type='text' name='email' onChange={handleInputPass} />
                            </label>
                            <button type='button'  onClick={handleLogin} >Entrar</button>
                        </form>
                    </main>
                    
                </div>

            </Layout>

        
    )
}