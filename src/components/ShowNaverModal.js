
import { useContext } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import { NaverContext } from "../contexts/NaverContext";
import '../styles/showNaverModal.css'
import CalculaTemp from '../utils/CalculaTemp'

export default function ShowNaverModal(){
    const { closeNaver, naverShow, deletNaver, editNaver } = useContext(NaverContext);
    const idade = CalculaTemp(naverShow.birthdate)
    const temp = CalculaTemp(naverShow.admission_date)

    return(
        <div className="modal">
            <div className="container">
                <header>
                    <img src={naverShow.url} alt={naverShow.name}/>
                </header>
                <main>
                    <button type='button' className='close' onClick={closeNaver}><IoMdClose /></button>
                    <div>
                        <h1>{naverShow.name}</h1>
                        <p>{naverShow.job_role}</p>

                        <strong>Idade</strong>
                        <p>{idade}</p>

                        <strong>Tempo de empresa</strong>
                        <p>{temp}</p>

                        <strong>Projetos que participou</strong>
                        <p>{naverShow.project}</p>

                    </div>

                    <div>
                        <button type='button' className='delete' onClick={() => deletNaver(naverShow.id)}><FaTrash /></button>
                        <button type='button' className='edit' onClick={() => editNaver(naverShow)}><FaPen /></button>
                    </div>
                </main>

            </div>
        </div>
    )
}