import { Header } from './components/Header.jsx'
import './SobrePage.css'

export function SobrePage(){
    return(
        <>
            <Header />
            <div className='pageContainer'>
                <div className='mainContainer'>
                    <div className='mainContent'>
                        <h1>Obrigado por visitar o AutoPreço!</h1>
                        <div className='textContent'>
                            <h2>Sobre o AutoPreço</h2>
                            <h3>
                                O AutoPreço é uma plataforma dedicada a fornecer informações precisas e atualizadas sobre os preços de veículos no Brasil, com base na Tabela Fipe. Nosso objetivo é auxiliar compradores e vendedores a tomar decisões mais informadas na hora de negociar veículos novos ou usados.
                            </h3>
                            <h3>
                                Todo o website e o sistema interno foram desenvolvidos por Richard Almeida, estudante do Instituto Federal de Ciência e Tecnologia do Rio Grande do Sul, com foco em oferecer uma experiência simples e confiável aos usuários.
                            </h3>
                            <h3>
                                Os dados utilizados no site vêm da API desenvolvida por Deivid Fortuna, atualizada mensalmente para garantir informações atualizadas da Tabela Fipe. Você pode acessar o site dele <a href="https://fipe.online/" className='linkDeivid'>clicando aqui</a>.
                            </h3>
                            <h3>
                                Vale lembrar que alguns modelos de veículos podem não estar disponíveis na base de dados.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
