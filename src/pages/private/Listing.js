import Layout from "../../components/Layout";
import { FaTrash, FaPen } from "react-icons/fa";
import '../../styles/listing.css'
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import ShowNaverModal from "../../components/ShowNaverModal";
import { Link } from "react-router-dom";
import { NaverContext } from "../../contexts/NaverContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function Listing(){
    const [naver, setNaver] = useState([])
    const { token } = useContext(AuthContext);
    const { isModalOpen, showNaver } = useContext(NaverContext);    

    useEffect(() => {
        api.getUserAll(token).then( response => {
            console.log('Response res', response)
            setNaver(response)
        }).catch()
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
                                <div className="card" onClick={() => showNaver(navers.id)}>
                                    <img src={navers.url} alt={navers.name} />
                                    <div>
                                        <strong>{navers.name}</strong>
                                        <span>{navers.job_role}</span>
                                        <div>
                                            <Link to=''>
                                                <FaTrash />
                                            </Link>
                                            <Link to='/editnaver'>
                                                <FaPen />                                        
                                            </Link>
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