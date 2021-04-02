import '../styles/layout.css'

export default function Layout({children}){

    return(
        <div className="container">
            <header>

            </header>
            <main>
                {children}
            </main>
        </div>
    )
}