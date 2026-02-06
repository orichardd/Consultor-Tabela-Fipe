import { Link } from 'react-router'
import { Vehicle } from './components/VehicleBlock.jsx'
import { Header } from './components/Header.jsx'
import './HomePage.css'

export function HomePage() {
    return (
        <>
            <Header />
            <div className='main'>
                <Link className='consultButton' to="/consultar">
                    <div className='text'>
                        <h1>Consulte o preço do seu veículo</h1>
                        <h2>Preços atualizados com a Fipe</h2>
                    </div>
                </Link>
                <Vehicle
                    name="718"
                    brand="Porsche"
                    year="2020"
                    fuel="Gasolina"
                    price="850000"
                    imageLink="/images/718.png"
                />
            </div>
        </>
    )
}