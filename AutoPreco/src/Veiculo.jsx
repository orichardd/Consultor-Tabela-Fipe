import { Vehicle } from "./components/VehicleBlock"
import { Header } from "./components/Header"

import './Veiculo.css'

export function VeiculoFinal() {
    return (
        <>  
            <Header />
            <div className="finalCarContent">
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