import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const NaverContext = createContext({})

export function NaverProvider({ children }){
    const [naverShow, setNaverShow] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { token } = useContext(AuthContext);

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
    }

    function handleChangeCreate(value){

    }

    function submitCreate(event){
        event.preventDefault();
    }


    return(
        <NaverContext.Provider value={{
            isModalOpen,
            naverShow,
            closeNaver,
            showNaver,
            handleChangeCreate,
            submitCreate

        }}>
            { children }
        </NaverContext.Provider>
    )
}