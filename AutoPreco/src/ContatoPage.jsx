import { Header } from './components/Header.jsx'
import { useState } from 'react'
import axios from 'axios'
import './ContatoPage.css'

export function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function sendEmail(e){
        e.preventDefault()

        if(name.trim() === '' || email.trim() === '' || message.trim() === ''){
            alert("Por favor, preencha todos os campos antes de enviar a mensagem.")
            return
        }

        try{
            await axios.post('http://localhost:1670/email/enviar', {
                name,
                email,
                message

            })
            alert("Email enviado com sucesso! Entraremos em contato o mais rápido possível.")
            setName('')
            setEmail('')
            setMessage('')

        } catch (error) {
            alert("Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.")
            console.log(error)
        }
    }

    return (
        <div>
            <Header />
            <div className='pageContainer'>
                <div className='mainContainer'>
                    <div className='mainContent'>
                        <h1>Muito obrigado por acessar o AutoPreço</h1>
                        <h2>Para entrar em contato:</h2>
                        <div className='contactInfo'>
                            <div className='contactForm'>
                                <input type="text" placeholder='Seu Nome' value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder='Seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <textarea placeholder='Sua mensagem' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div className='sendButton'>
                                   <button onClick={sendEmail}>Enviar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}