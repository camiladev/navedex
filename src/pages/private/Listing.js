import Layout from "../../components/Layout";
import { FaTrash, FaPen } from "react-icons/fa";
import '../../styles/listing.css'
import { useContext, useEffect, useState } from "react";
import ShowNaverModal from "../../components/ShowNaverModal";
import { Link } from "react-router-dom";
import { NaverContext } from "../../contexts/NaverContext";

export default function Listing(){
    const { isModalOpen, showNaver, deletNaver, editNaver, atualizaLista, naver } = useContext(NaverContext);    

    useEffect(() => {
        atualizaLista()
    } ,[])

      

    return(
        <Layout>
            <div className="container-listing">
                <header>
                    <h1>Navers</h1>
                    <Link to='/createnaver'>
                        <button>Adicionar Naver</button>
                    </Link>
                </header>
                <main>
                    <div className="listing">
                        {naver.length === 0 && (<div>Carregando Navers</div>)}
                        { naver.map( navers => {
                            return(
                                <div className="card" >
                                    <img src={navers.url} alt={navers.name} onClick={() => showNaver(navers.id)} />
                                    <div>
                                        <strong>{navers.name}</strong>
                                        <span>{navers.job_role}</span>
                                        <div>
                                            <button onClick={() => deletNaver(navers.id)}>
                                                <FaTrash />
                                            </button>
                                            <button onClick={ () => editNaver(navers) }>
                                                <FaPen />                                        
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>

                            )
                        } ) }

                    </div>
                </main>
            </div>

            { isModalOpen && <ShowNaverModal /> }
        </Layout>
    )
}