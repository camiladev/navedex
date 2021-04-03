
import { useContext } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import { NaverContext } from "../contexts/NaverContext";
import '../styles/showNaverModal.css'

export default function ShowNaverModal(){
    const { closeNaver, naverShow } = useContext(NaverContext);

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
                        <p>{naverShow.birthdate}</p>

                        <strong>Tempo de empresa</strong>
                        <p>{naverShow.admission_date}</p>

                        <strong>Projetos que participou</strong>
                        <p>{naverShow.project}</p>

                    </div>

                    <div>
                        <button type='button' className='delete'><FaTrash /></button>
                        <button type='button' className='edit'><FaPen /></button>
                    </div>
                </main>

            </div>
        </div>
    )
}