import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import '../styles/layout.css'

export default function Layout({children}){
    const { isAuthenticated, logOut } = useContext(AuthContext)
    
    return(
        <div className="container">
            {isAuthenticated && (
                <header>
                    <div className="logo"></div>
                    <div className="exit" onClick={logOut}>Sair</div>

                </header>

            )}
            <main>
                
                    {children}
            </main>
        </div>
    )
}