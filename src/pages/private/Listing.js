import Layout from "../../components/Layout";
import { FaTrash, FaPen } from "react-icons/fa";
import '../../styles/listing.css'
import { useEffect, useState } from "react";
import api from "../../services/api";
import ShowNaverModal from "../../components/ShowNaverModal";
import { Link } from "react-router-dom";

export default function Listing(){
    const [naver, setNaver] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect( () => {
        api.getUserAll().then( response => {
            console.log('Response user', response)
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
                    {naver.length === 0 && (<div>Carregando Navers</div>)}
                    { naver.map( navers => {
                        return(
                            <div className="card">
                                <img src={navers.url} alt={navers.name} />
                                <div>
                                    <strong>{navers.name}</strong>
                                    <span>{navers.job_role}</span>
                                    <div>
                                        <FaTrash />
                                        <FaPen />
                                    </div>
                                </div>
                            </div>

                        )
                    } ) }
                </main>
            </div>

            { isModalOpen && <ShowNaverModal /> }
        </Layout>
    )
}