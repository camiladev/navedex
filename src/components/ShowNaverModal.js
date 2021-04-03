
import { FaTrash, FaPen } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import '../styles/showNaverModal.css'

export default function ShowNaverModal(){

    return(
        <div className="modal">
            <div className="container">
                <header></header>
                <main>
                    <button type='button' className='close'><IoMdClose /></button>
                    <div>
                        <h1>Camila Matos</h1>
                        <p>Desenvolvedora Front-end</p>

                        <strong>Idade</strong>
                        <p>Lorem</p>

                        <strong>Tempo de empresa</strong>
                        <p>Lorem</p>

                        <strong>Projetos que participou</strong>
                        <p>Lorem</p>

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