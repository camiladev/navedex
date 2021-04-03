import Layout from "../../components/Layout";

import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";


export default function EditNaver(){

    return(
        <Layout>
            <div className="container-edit">
                <header>
                    <Link to='/navers'>
                        <button><IoIosArrowBack /></button>                    
                    </Link>
                    <h1>Editar Naver</h1>
                </header>
                <main>
                    <form onSubmit="">
                        <label htmlFor="name">Nome</label>
                        <input type="text" 
                               name='name' 
                               placeholder='Nome' 
                               value=''
                               onChange='' />

                        <label htmlFor="cargo">Cargo</label>
                        <input type="text" 
                               name='cargo' 
                               placeholder='Cargo' 
                               value=''
                               onChange='' />

                        <label htmlFor="idade">Idade</label>
                        <input type="text" 
                               name='idade' 
                               placeholder='Idade' 
                               value=''
                               onChange='' />

                        <label htmlFor="tempEmp">Tempo de empresa</label>
                        <input type="text" 
                               name='tempEmp' 
                               placeholder='Tempo de empresa' 
                               value=''
                               onChange='' />
                        
                        <label htmlFor="project">Projetos que participou</label>
                        <input type="text" 
                               name='project' 
                               placeholder='Projetos que participou' 
                               value=''
                               onChange='' />
                        
                        <label htmlFor="url_foto">URL da foto do Naver</label>
                        <input type="text" 
                               name='url_foto' 
                               placeholder='URL da foto do Naver' 
                               value=''
                               onChange='' />

                        <button type='submit' className='Salvar'>Salvar</button>
                    </form>
                </main>
            </div>
        </Layout>
    )
}