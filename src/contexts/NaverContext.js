import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import Modal from '../components/Modal'
import { AuthContext } from "./AuthContext";

export const NaverContext = createContext({})

export function NaverProvider({ children }){
    const [naverShow, setNaverShow] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dadosNaver, setDadosNaver] = useState([])
    const { token } = useContext(AuthContext)

    const [ isMessageOpen, setIsMessageOpen] = useState(false)
    const [ containerMessage, setContainerMessage] = useState()

    function showNaver(value){
        const response = api.viewNaver({ token: token, id: value})
        .then( res => {
            setNaverShow(res)
            setIsModalOpen(true)
        })
        .catch()
    }

    function closeNaver(){        
        setIsModalOpen(false)
        setIsMessageOpen(false)
        setDadosNaver({})
    }

    function handleChangeCreate(event){
        setDadosNaver({
            ...dadosNaver,
            [event.target.name]:event.target.value
        })
        
        console.log('Dados ',event.target.name,' . ', event.target.value )

    }

    function submitCreate(event){
        event.preventDefault();
        console.log('eviando...', dadosNaver)
        const response = api.createNaver({token: token, dadosNaver: dadosNaver})
        .then( res => {
            setContainerMessage({
                title: 'Naver Criado',
                text: 'Naver criado com sucesso!',
                type: 'message'
            })
            setIsMessageOpen(true)
            setDadosNaver({})

        })
        .catch( error => {
            setContainerMessage({
                title: 'Erro ao criar naver',
                text: 'Naver não foi criado!!',
                type: 'message'
            })
            setIsMessageOpen(true)
        })
    }

    function deletNaver(id){
        setDadosNaver({id: id})
        setContainerMessage({
            title: 'Excluir Naver',
            text: 'Tem certeza que deseja excluir este Naver?',
            type: 'delet'
        })
        setIsMessageOpen(true)
    }

    function confirmDelet(){
        setIsMessageOpen(false)
        const id = dadosNaver.id
        console.log(id)
        const response = api.deletNaver({token: token, id: id})
        .then( res => {
            setContainerMessage({
                title: 'Naver Excluido',
                text: 'Naver excluido com sucesso!',
                type: 'message'
            })
            setIsMessageOpen(true)

        })
        .catch( error => {
            setContainerMessage({
                title: 'Erro ao excluir naver',
                text: 'Naver não foi Excluido!!',
                type: 'message'
            })
            setIsMessageOpen(true)
        })
    }


    return(
        <NaverContext.Provider value={{
            isModalOpen,
            naverShow,
            dadosNaver,
            containerMessage,
            closeNaver,
            showNaver,
            handleChangeCreate,
            submitCreate,
            deletNaver,
            confirmDelet

        }}>
            { children }

            {isMessageOpen && <Modal />}
        </NaverContext.Provider>
    )
}