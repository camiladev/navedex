

export default function Login(){

    return(
        <div className='container'>
            <header>
                <h1>nave.rs</h1>
            </header>
            <main>
                <form>
                    <label>
                        E-mail
                        <input type='text' name='email' />
                    </label>
                    <label>
                        Senha
                        <input type='text' name='email' />
                    </label>
                    <button type='submit' value='logar' >Entrar</button>
                </form>
            </main>
            
        </div>
    )
}