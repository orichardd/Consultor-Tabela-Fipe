import { Header } from './components/Header.jsx'
import './ContatoPage.css'

export function Contato() {
    return (
        <div>
            <Header />
            <div className='pageContainer'>
                <div className='mainContainer'>
                    <div className='mainContent'>
                        <h1>Muito obrigado por acessar o AutoPreco</h1>
                        <h2>Para entrar em contato:</h2>
                        <div className='contactInfo'>
                            <div className='contactForm'>
                                <input type="text" placeholder='Seu Nome' />
                                <input type="text" placeholder='Seu email' />
                                <textarea placeholder='Sua mensagem'></textarea>
                                <div className='sendButton'>
                                   <button>Enviar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}