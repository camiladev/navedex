import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import '../styles/layout.css'

export default function Layout({children}){
    const { isAuthenticated } = useContext(AuthContext)
    
    return(
        <div className="container">
            {isAuthenticated && (
                <header>
                    <div className="logo"></div>
                    <div className="exit">Sair</div>

                </header>

            )}
            <main>
                {children}
            </main>
        </div>
    )
}