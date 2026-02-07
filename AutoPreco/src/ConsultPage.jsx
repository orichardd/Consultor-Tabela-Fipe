import { Header } from './components/Header.jsx'
import { VehicleOption } from './components/VehicleOption.jsx'
import './consultPage.css'

export function ConsultPage() {
    return (
        <>
            <Header />
            <div className='main'>
                <div className='consultButtons'>
                    <VehicleOption vehicleType="motos" imageSource="/images/classic350.png" vehicleText={"Motos"} />
                    <VehicleOption vehicleType="carros" imageSource="/images/corolla.webp" vehicleText={"Carros"} />
                    <VehicleOption vehicleType="caminhoes" imageSource="/images/mercedesTruck.png" vehicleText={"Caminhões"} />
                </div>
            </div>
        </>
    )
}