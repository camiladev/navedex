
import { FaTrash, FaPen } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import '../styles/showNaverModal.css'

export default function ShowNaverModal(){

    return(
        <div className="container-modal">
            <header></header>
            <main>
                <button type='button' className='sair'><IoMdClose /></button>
                <h1>Nome</h1>
                <p>Cargo</p>

                <strong>Idade</strong>
                <p>Lorem</p>

                <strong>Tempo de empresa</strong>
                <p>Lorem</p>

                <strong>Projetos que participou</strong>
                <p>Lorem</p>

                <div>
                    <FaTrash />
                    <FaPen />
                </div>
            </main>
        </div>
    )
}