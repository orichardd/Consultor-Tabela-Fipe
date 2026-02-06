import { Header } from './components/Header.jsx'
import { VehicleOption } from './components/VehicleOption.jsx'
import './consultPage.css'

export function ConsultPage() {
    return (
        <>
            <Header />
            <div className='main'>
                <div className='consultButtons'>
                    <VehicleOption vehicleType="motos" imageSource="../public/images/classic350.png" vehicleText={"motos"} />
                    <VehicleOption vehicleType="carros" imageSource="../public/images/corolla.webp" vehicleText={"carros"} />
                    <VehicleOption vehicleType="caminhoes" imageSource="../public/images/mercedesTruck.png" vehicleText={"caminhoes"} />
                </div>
            </div>
        </>
    )
}