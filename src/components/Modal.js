import { Link } from "react-router-dom";
import '../styles/modal.css';

export default function Modal(){

    return(
        <div className="container-modal">
            <div className="modal">
                <Link to='/navers'>
                    <button className="close">X</button>
                </Link>
                <div>
                    <h1>Naver Criado</h1>
                    <p>Naver criado com sucesso!</p>
                </div>
                <div className="button">
                    <button type='button' className='cancelar' >Cancelar</button>
                    <button type='button' className='excluir' >Excluir</button>
                </div>
            </div>
        </div>
    )
}