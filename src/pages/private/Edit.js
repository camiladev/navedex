import Layout from "../../components/Layout";
import '../../styles/form.css';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";


export default function EditNaver(){

    return(
        <Layout>
            <div className="container-form">
                <header>
                    <Link to='/navers'>
                        <button className='back'><IoIosArrowBack /></button>                    
                    </Link>
                    <h1>Editar Naver</h1>
                </header>
                <main>
                    <form className='form' onSubmit="">
                        <p>
                            <label htmlFor="name">Nome</label>
                            <input type="text" 
                                name='name' 
                                placeholder='Nome' 
                                value=''
                                onChange='' />

                        </p>

                        <p>
                            
                            <label htmlFor="cargo">Cargo</label>
                            <input type="text" 
                                name='cargo' 
                                placeholder='Cargo' 
                                value=''
                                onChange='' />
                        </p>
                        <p>

                            <label htmlFor="idade">Idade</label>
                            <input type="text" 
                                name='idade' 
                                placeholder='Idade' 
                                value=''
                                onChange='' />
                        
                        </p>
                        <p>
                            <label htmlFor="tempEmp">Tempo de empresa</label>
                            <input type="text" 
                                name='tempEmp' 
                                placeholder='Tempo de empresa' 
                                value=''
                                onChange='' />

                        </p>
                        <p>
                            <label htmlFor="project">Projetos que participou</label>
                            <input type="text" 
                                name='project' 
                                placeholder='Projetos que participou' 
                                value=''
                                onChange='' />

                        </p>

                        <p>
                            <label htmlFor="url_foto">URL da foto do Naver</label>
                            <input type="text" 
                                name='url_foto' 
                                placeholder='URL da foto do Naver' 
                                value=''
                                onChange='' />

                        </p>

                        <p className='button'>
                            <button type='submit' className='salvar'>Salvar</button>
                        </p>
                    </form>
                </main>
            </div>
        </Layout>
    )
}