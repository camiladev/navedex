import { createContext, useContext, useState } from "react";
import api from "../services/api";
import Modal from '../components/Modal'
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router";

export const NaverContext = createContext({})

export function NaverProvider({ children }){
    const [naverShow, setNaverShow] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dadosNaver, setDadosNaver] = useState([])
    const [ naver, setNaver ] = useState([])
    const { token } = useContext(AuthContext)

    const [ isMessageOpen, setIsMessageOpen] = useState(false)
    const [ containerMessage, setContainerMessage] = useState()

    const history = useHistory();

    function backNav(){
        setDadosNaver({})
    }

    function atualizaLista(){        
            api.getUserAll(token).then( response => {
                setNaver(response)
            }).catch()        
    
    }


    function showNaver(value){
        
        const response = api.viewNaver({ token: token, id: value})
        .then( res => {
            setNaverShow(res)
            setIsModalOpen(true)
        })
        .catch( error => {
            setContainerMessage({
                title: 'Naver não localizado',
                text: 'Não foi possivel localizar naver!',
                type: 'message'
            })
            setIsMessageOpen(true)
        })
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

    }

    function submitCreate(event){
        event.preventDefault();
        
        const response = api.createNaver({token: token, dadosNaver: dadosNaver})
        .then( res => {
            setContainerMessage({
                title: 'Naver Criado',
                text: 'Naver criado com sucesso!',
                type: 'message'
            })
            setIsMessageOpen(true)
            history.push('/navers')
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
        
        const response = api.deletNaver({token: token, id: id})
        .then( res => {
            setContainerMessage({
                title: 'Naver Excluido',
                text: 'Naver excluido com sucesso!',
                type: 'message'
            })
            setIsMessageOpen(true)
            atualizaLista()

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

    function editNaver(values){
        setDadosNaver({
            id: values.id,
            name: values.name,
            cargo: values.job_role,
            idade: values.birthdate,
            tempEmp: values.admission_date,
            project: values.project,
            url_foto: values.url

        })
        history.push('/editnaver')
    }

    function confirmEdit(event){
        event.preventDefault();
        
        const response = api.updateNaver({token: token, dadosNaver: dadosNaver})
        .then( res => {
            setContainerMessage({
                title: 'Naver Atualizado',
                text: 'Naver atualizado com sucesso!',
                type: 'message'
            })
            setIsMessageOpen(true)
            history.push('/navers')
            setDadosNaver({})

        })
        .catch( error => {
            setContainerMessage({
                title: 'Erro ao editar naver',
                text: 'Naver não foi editado!!',
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
            naver,
            closeNaver,
            showNaver,
            handleChangeCreate,
            submitCreate,
            deletNaver,
            confirmDelet,
            editNaver,
            confirmEdit,
            backNav,
            atualizaLista

        }}>
            { children }

            {isMessageOpen && <Modal />}
        </NaverContext.Provider>
    )
}