import { Link } from 'react-router'
import './Header.css'

export function Header(){
    return(
        <div className="header">
            <div className='content'>
            <h1 className='title'>AutoPreço</h1>
                <div className='buttons'>
                    <Link to="/" className='button'>Inicio</Link>
                    <Link to="/sobre" className='button'>Sobre</Link>
                    <Link to="/contato" className='button'>Contato</Link>
                </div>
            </div>
        </div>
    )
}