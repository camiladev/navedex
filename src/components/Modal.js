import { useContext } from "react";
import { NaverContext } from "../contexts/NaverContext";
import { IoMdClose } from 'react-icons/io';
import '../styles/modal.css';

export default function Modal(){
    const { closeNaver, containerMessage, confirmDelet } = useContext(NaverContext)
    
    const tipo = containerMessage.type

    return(
        <div className="container-modal">
            <div className="modal">
                {tipo === 'message' && 
                    <button className="close" onClick={closeNaver}><IoMdClose /></button>
                
                }
        
                <div>
                    <h1>{containerMessage.title}</h1>
                    <p>{containerMessage.text}</p>
                </div>
                { tipo === 'delet' && 
                    <div className="button">
                        <button type='button' className='cancelar' onClick={closeNaver} >Cancelar</button>
                        <button type='button' className='excluir' onClick={confirmDelet} >Excluir</button>
                    </div>
                
                }
            </div>
        </div>
    )
}