import Layout from "../../components/Layout";
import '../../styles/form.css'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NaverContext } from "../../contexts/NaverContext";


export default function CreateNaver(){
    const { handleChangeCreate, submitCreate, dadosNaver } = useContext(NaverContext);

    return(
        <Layout>
            <div className="container-form">
                <header>
                    <Link to='/navers'>
                        <button className='back'><IoIosArrowBack /></button>                    
                    </Link>
                    <h1>Adicionar Naver</h1>
                </header>
                <main>
                    <form className='form' onSubmit={submitCreate}>
                        <p>
                            <label htmlFor="name">Nome</label>
                            <input type="text" 
                                name='name' 
                                placeholder='Nome' 
                                required
                                value={dadosNaver.name}
                                onChange={handleChangeCreate} />

                        </p>

                        <p>
                            
                            <label htmlFor="cargo">Cargo</label>
                            <input type="text" 
                                name='cargo' 
                                placeholder='Cargo' 
                                required
                                value={dadosNaver.cargo}
                                onChange={handleChangeCreate} />
                        </p>
                        <p>

                            <label htmlFor="idade">Idade</label>
                            <input type="date" 
                                name='idade'     
                                required      
                                value={dadosNaver.idade}
                                onChange={handleChangeCreate} />
                        
                        </p>
                        <p>
                            <label htmlFor="tempEmp">Tempo de empresa</label>
                            <input type="date" 
                                name='tempEmp' 
                                required
                                value={dadosNaver.tempEmp}
                                onChange={handleChangeCreate} />

                        </p>
                        <p>
                            <label htmlFor="project">Projetos que participou</label>
                            <input type="text" 
                                name='project' 
                                required
                                placeholder='Projetos que participou' 
                                value={dadosNaver.project}
                                onChange={handleChangeCreate} />

                        </p>

                        <p>
                            <label htmlFor="url_foto">URL da foto do Naver</label>
                            <input type="text" 
                                name='url_foto' 
                                required
                                placeholder='URL da foto do Naver' 
                                value={dadosNaver.url_foto}
                                onChange={handleChangeCreate} />

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