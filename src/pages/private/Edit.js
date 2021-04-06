import Layout from "../../components/Layout";
import '../../styles/form.css';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NaverContext } from "../../contexts/NaverContext";


export default function EditNaver(){
    const {dadosNaver , confirmEdit, handleChangeCreate, backNav} = useContext(NaverContext)
    const idade = (dadosNaver.idade).split('T')  
    const temp = (dadosNaver.tempEmp).split('T')  

    return(
        <Layout>
            <div className="container-form">
                <header>
                    <Link to='/navers'>
                        <button className='back' onClick={backNav}><IoIosArrowBack /></button>                    
                    </Link>
                    <h1>Editar Naver</h1>
                </header>
                <main>
                    <form className='form' onSubmit={confirmEdit}>
                        <p>
                            <label htmlFor="name">Nome</label>
                            <input type="text" 
                                name='name' 
                                value={dadosNaver.name}
                                onChange={handleChangeCreate} />

                        </p>

                        <p>
                            
                            <label htmlFor="cargo">Cargo</label>
                            <input type="text" 
                                name='cargo' 
                                value={dadosNaver.cargo}
                                onChange={handleChangeCreate} />
                        </p>
                        <p>

                            <label htmlFor="idade">Idade</label>
                            <input type="date" 
                                name='idade' 
                                value={idade[0]}
                                onChange={handleChangeCreate} />
                        
                        </p>
                        <p>
                            <label htmlFor="tempEmp">Tempo de empresa</label>
                            <input type="date" 
                                name='tempEmp' 
                                value={temp[0]}
                                onChange={handleChangeCreate} />

                        </p>
                        <p>
                            <label htmlFor="project">Projetos que participou</label>
                            <input type="text" 
                                name='project' 
                                value={dadosNaver.project}
                                onChange={handleChangeCreate} />

                        </p>

                        <p>
                            <label htmlFor="url_foto">URL da foto do Naver</label>
                            <input type="text" 
                                name='url_foto' 
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